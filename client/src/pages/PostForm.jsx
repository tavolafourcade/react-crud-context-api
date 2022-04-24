/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { useNavigate, useParams, Link } from 'react-router-dom'
import * as Yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { usePosts } from '../context/postContext'

function PostForm() {
  const { createPost, getPost, updatePost } = usePosts()
  const navigate = useNavigate()
  const params = useParams()
  const [post, setPost] = useState({
    title: '',
    description: '',
    image: null,
  })

  // Get backend response and use it as initial value for Formik
  useEffect(() => {
    (async () => {
      // If params has an id means the user wants to update
      if (params.id) {
        const data = await getPost(params.id)
        setPost(data)
      }
    })()
  }, [params.id])

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between items-center py-4 text-white">
          <h3>New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">Go back</Link>
        </header>
        <Formik
          initialValues={post}
          enableReinitialize
          validationSchema={Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required'),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values)
            } else {
              await createPost(values)
            }
            actions.setSubmitting(false)
            navigate('/')
          }}
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="title" className="text-sm block font-bold text-gray-400">Title</label>
              <Field
                name="title"
                placeholder="title"
                className="px-3 py-2 focus:outline-none mb-4 rounded bg-gray-600 text-white w-full"
              />
              <ErrorMessage
                name="title"
                className="text-red-400 text-sm"
                component="p"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-400"
              >
                Description
              </label>
              <Field
                rows={3}
                component="textarea"
                name="description"
                placeholder="description"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
              />
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-400 text-sm"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-400"
              >
                Description

              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                onChange={(e) => setFieldValue('image', e.target.files[0])}
              />

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus-outline:none disabled:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                ) : 'Save'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default PostForm
