//importing some important tools for this component
import React from 'react'

//router package for react-routing 
import { Routes, Route } from 'react-router-dom'

//some Components that is to be rendered in routing or static
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import Coin from './Pages/Coin/Coin'
import Footer from './Components/Footer/Footer'





const App = () => {
  return (
    <div className='app'>
      <Navbar/>


      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App