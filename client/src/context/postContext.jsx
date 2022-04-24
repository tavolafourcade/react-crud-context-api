import React, {
  createContext, useState, useContext, useEffect,
} from 'react'
import {
  getPostsRequest, createPostsRequest, deletePostRequest, getPostRequest, updatePostRequest,
} from '../api/posts'

const postContext = createContext()

// Custom Hook for getting the context
export const usePosts = () => {
  const context = useContext(postContext)
  return context
}

// eslint-disable-next-line react/prop-types
function PostProvider({ children }) {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await getPostsRequest()
    setPosts(res.data)
  }

  const createPost = async (post) => {
    try {
      const res = await createPostsRequest(post)
      // Showing the posts sent to the DB as soon the user is redirected to '/'
      setPosts([...posts, res.data])
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  const deletePost = async (id) => {
    const res = await deletePostRequest(id)
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id))
    }
  }

  // This function will get all data for a specific Post
  const getPost = async (id) => {
    const res = await getPostRequest(id)
    return res.data
  }
  // updatePost will receive the id of the Post I want to update and the data of it
  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post)
    setPosts(posts.map((post) => (post._id === id ? res.data : post)))
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
      updatePost,
    }}
    >
      {children}

    </postContext.Provider>
  )
}

export default PostProvider
