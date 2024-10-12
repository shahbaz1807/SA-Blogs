import { StrictMode } from 'react'
import { createRoot } from 'react-dom'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import AllBlogs from './pages/AllBlogs.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/about_us',
    element: <About/>
  },
  {
    path: '/all_blogs',
    element: <AllBlogs/>
  },
  {
    path: '/contact_us',
    element: <Contact/>
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
