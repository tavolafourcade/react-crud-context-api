/* eslint-disable no-underscore-dangle */
import React, {
  createContext, useState, useContext, useEffect,
} from 'react'
import {
  getPostsRequest, createPostsRequest, deletePostRequest, getPostRequest,
} from '../api/posts'

const postContext = createContext()

// Custom Hook for getting the context
export const usePosts = () => {
  const context = useContext(postContext)
  console.log('context', context)
  return context
}

// eslint-disable-next-line react/prop-types
function PostProvider({ children }) {
  const [posts, setPosts] = useState([])
  console.log('setPosts', setPosts)

  const getPosts = async () => {
    const res = await getPostsRequest()
    setPosts(res.data)
    console.log('res', res)
  }

  const createPost = async (post) => {
    const res = await createPostsRequest(post)
    // Showing the posts sent to the DB as soon the user is redirected to '/'
    setPosts([...posts, res.data])
    console.log('res', res.data)
  }

  const deletePost = async (id) => {
    await deletePostRequest(id)
    console.log('ID to delete', id)
    setPosts(posts.filter((post) => post._id !== id))
  }

  // This function will get all data for a specific Post
  const getPost = async (id) => {
    const res = await getPostRequest(id)
    return res.data
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <postContext.Provider value={{
      posts,
      getPosts,
      createPost,
      deletePost,
      getPost,
    }}
    >
      {children}

    </postContext.Provider>
  )
}

export default PostProvider
