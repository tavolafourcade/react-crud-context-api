/* eslint-disable import/extensions */
import fs from 'fs-extra'
import Post from '../models/Post.js'
import { uploadImage, deleteImage } from '../libs/cloudinary.js'

// Return an array of posts from the DB
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.send(posts)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Create a post
export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body
    let image
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath)
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      }
      await fs.remove(req.files.image.tempFilePath)
    }

    // Creating a new Post in our DB
    const newPost = new Post({ title, description, image })

    // Saving the new Post
    await newPost.save()

    // Answering to the Client with a json object (a new Post)
    return res.json(newPost)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

// Update a post
export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    updatedPost.save()
    return res.send(updatedPost)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const postRemoved = await Post.findByIdAndDelete(req.params.id)

    if (!postRemoved) return res.sendStatus(404)

    // Deleting the image from cloudinary if exists in the Post
    if (postRemoved.image.public_id) {
      await deleteImage(postRemoved.image.public_id)
    }
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Return one post from the DB
export const getPost = async (req, res) => {
  try {
    const postRequested = await Post.findById(req.params.id)

    if (!postRequested) return res.sendStatus(404)
    return res.json(postRequested)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
