/* eslint-disable import/prefer-default-export */
import axios from 'axios'

// eslint-disable-next-line no-return-await
export const getPostsRequest = async () => await axios.get('/posts')

// eslint-disable-next-line no-return-await
export const createPostsRequest = async (post) => await axios.post('/posts', post)
