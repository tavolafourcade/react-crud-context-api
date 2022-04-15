import {Router} from "express"
const router = Router()

// CRUD

// Return an array of posts from the DB
router.get('/posts', (req,res) => [])

// Create a post
router.post('/posts', (req,res) => res.send('New post created'))

// Update a post
router.put('/posts', (req,res) => res.send('Updating a post'))

// Delete a post
router.delete('/posts', (req,res) => res.send('Deleting a post'))

// Return one post from the DB
router.get('/posts/:id', (req,res) => res.send('Getting a post'))

export default router