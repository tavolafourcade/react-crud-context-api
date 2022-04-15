import {Router} from "express"
import { getPosts, createPost, updatePost, deletePost, getPost } from '../controllers/posts.controllers.js'
const router = Router()

// CRUD

// Return an array of posts from the DB
router.get('/posts', getPosts)

// Create a post
router.post('/posts', createPost)

// Update a post
router.put('/posts', updatePost)

// Delete a post
router.delete('/posts', deletePost)

// Return one post from the DB
router.get('/posts/:id', getPost)

export default router