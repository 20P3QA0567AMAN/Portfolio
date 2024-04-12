import React from 'react'
import './index.css'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { createHashRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <><About/> <Home/></>
    
    },
    {
      path: "/skills",
      element: <><About/> <Skills/></>
      
    },
    {
      path: "/projects",
      element: <><About/> <Projects/></>
      
    }
  ])
  return (
    <div className='main'> 
      <div className='page1'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
