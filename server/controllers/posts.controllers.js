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

// Update a post
export const updatePost = async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })

  updatedPost.save()
  return res.send(updatedPost)
}

// Delete a post
export const deletePost = async (req, res) => {
  const postRemoved = await Post.findByIdAndDelete(req.params.id)

  if (!postRemoved) return res.sendStatus(404)
  return res.sendStatus(204)
}
export const getPost = (req, res) => res.send('Getting a post')
