/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const getPostsRequest = async () => await axios.get('/posts')

export const createPostsRequest = async (post) => await axios.post('/posts', post)

export const deletePostRequest = async (id) => await axios.delete(`/posts/${id}`)

export const getPostRequest = async (id) => await axios.get(`/posts/${id}`)
