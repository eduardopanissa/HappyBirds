
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//components
import RootLayout from './routes/root/RootLayout'
import Home from './routes/Home/Home'
import Login from './routes/login/Login'
import About from './routes/About/About'
import Register from './routes/Register/Register'

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
