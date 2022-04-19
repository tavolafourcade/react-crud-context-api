import React, { useEffect } from 'react'
import { usePosts } from '../context/postContext'

function HomePage() {
  const { getPosts } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div>
      HomePage

    </div>
  )
}

export default HomePage
