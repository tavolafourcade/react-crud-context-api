import React from 'react'
import { VscEmptyWindow } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { usePosts } from '../context/postContext'

function HomePage() {
  const { posts } = usePosts()

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">There are not posts yet...</h1>
      </div>
    )
  }
  return (
    <div>
      <Link to="/new">Create a new Post</Link>
      {
        posts.map((post) => (
          // eslint-disable-next-line no-underscore-dangle
          <div key={post._id} className="text-white">{post.title}</div>
        ))
      }

    </div>
  )
}

export default HomePage
