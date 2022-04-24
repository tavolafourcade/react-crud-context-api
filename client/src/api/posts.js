/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const getPostsRequest = async () => await axios.get('/posts')

// By default post expects a json object so I have to specified that it's a form
export const createPostsRequest = async (post) => {
  const form = new FormData()

  Object.entries(post).forEach(([key, value]) => {
    form.append(key, value)
  })

  return await axios.post('/posts', form, {
    'Content-Type': 'multipart/form-data',
  })
}

export const deletePostRequest = async (id) => await axios.delete(`/posts/${id}`)

export const getPostRequest = async (id) => await axios.get(`/posts/${id}`)

export const updatePostRequest = async (id, newPostFields) => await axios.put(`/posts/${id}`, newPostFields)
