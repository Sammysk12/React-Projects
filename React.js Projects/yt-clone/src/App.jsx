//react tools 
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


//For react router dom to set the route path and some components to render
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import Video from './Pages/Video/Video'



const App = () => {

const [sidebar, setSideBar] = useState(true);

  return (
    <div>
      <Navbar setSideBar={setSideBar}/>
      <Routes>
        <Route path='/' element={<HomePage sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>

    </div>
  )
}

export default App