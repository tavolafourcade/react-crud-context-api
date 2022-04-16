import Post from '../models/Post.js'

// Return an array of posts from the DB
export const getPosts = async (req, res) => {
  const posts = await Post.find()
  res.send(posts)
}

// Create a post
export const createPost = async (req, res) => {
  const { title, description } = req.body

  // Creating a new Post in our DB
  const newPost = new Post({ title, description })

  // Saving the new Post
  await newPost.save()

// Answering to the Client with a json object (a new Post)
  return res.json(newPost)
}

export const updatePost = (req, res) => res.send('Updating a post')
export const deletePost = (req, res) => res.send('Deleting a post')
export const getPost = (req, res) => res.send('Getting a post')
