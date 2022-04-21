/* eslint-disable react/prop-types */
import React from 'react'

function PostCard({ post }) {
  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer ">
      <div className="px-4 py-7">
        <h3>
          {post.title}
        </h3>
        <p>
          {post.description}
        </p>
      </div>
    </div>
  )
}

export default PostCard
