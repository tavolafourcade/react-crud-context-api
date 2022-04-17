import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, NotFoundPage, PostForm } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<PostForm />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
