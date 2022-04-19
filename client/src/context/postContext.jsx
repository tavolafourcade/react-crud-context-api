import React, { createContext, useState, useContext } from 'react'
import { getPostsRequest } from '../api/posts'

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
    console.log('res', res)
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <postContext.Provider value={{
      posts,
      getPosts,
    }}
    >
      {children}

    </postContext.Provider>
  )
}

export default PostProvider
