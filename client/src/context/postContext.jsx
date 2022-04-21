import React, {
  createContext, useState, useContext, useEffect,
} from 'react'
import { getPostsRequest, createPostsRequest } from '../api/posts'

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

  useEffect(() => {
    getPosts()
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <postContext.Provider value={{
      posts,
      getPosts,
      createPost,
    }}
    >
      {children}

    </postContext.Provider>
  )
}

export default PostProvider
