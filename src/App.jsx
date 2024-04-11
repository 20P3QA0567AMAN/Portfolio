import React from 'react'
import './index.css'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route  } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
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
     
        {/* <BrowserRouter>
        <About/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
        </BrowserRouter> */}
        
       
        
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
