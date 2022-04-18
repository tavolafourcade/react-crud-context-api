import React, { createContext, useState, useContext } from 'react'

const postContext = createContext()

// Custom Hook for getting the context
export const usePosts = () => {
  const context = useContext(postContext)
  console.log(context)
  return context
}

// eslint-disable-next-line react/prop-types
function PostProvider({ children }) {
  const [posts, setPosts] = useState([])
  console.log('setPosts', setPosts)
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <postContext.Provider value={{
      posts,
    }}
    >
      {children}

    </postContext.Provider>
  )
}

export default PostProvider
