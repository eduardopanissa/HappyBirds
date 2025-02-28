

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//components
import RootLayout from './routes/root/RootLayout'
import Home from './routes/Home/Home'
import Login from './routes/login/Login'
import About from './routes/About/About'
import Register from './routes/Register/Register'
import Gallery from './routes/Gallery/Gallery'
import CreatePost from './routes/CreatePost/CreatePost'
import EditPost from './routes/EditPost/EditPost'
import Post from './routes/Post/Post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/post/createPost',
        element: <CreatePost />
      },
      {
        path: '/post/editPost/:id',
        element: <EditPost />
      },
      {
        path: '/post/:id',
        element: <Post />
      }
    ]
  }
])

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
