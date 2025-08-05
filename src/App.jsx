import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './pages/Main'
import ErrorPage404 from './pages/ErrorPage404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <ErrorPage404 />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
