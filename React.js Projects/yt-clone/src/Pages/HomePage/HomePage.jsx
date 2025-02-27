import React, { useState } from 'react'
import './HomePage.css'

//some important components
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'



const HomePage = ({sidebar}) => {

 
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed category={category}/>
    </div>
      
    </div>
  )
}

export default HomePage