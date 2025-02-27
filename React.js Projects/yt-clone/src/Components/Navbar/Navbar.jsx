//important imports like tools and hooks for react 
import React from 'react'
import {Link} from 'react-router-dom'


//custom css file for this component
import './Navbar.css'


//some media for this component
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import noti_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const Navbar = ({setSideBar}) => {
  return (
    <nav className='flex-div'>

    <div className="nav-left flex-div">
        <img className='menu-icon'  onClick={()=>setSideBar(prev=> prev===false?true:false)} src={menu_icon} alt="" />
        <Link to='/'><img className='logo' src={logo} alt="" /></Link>
        </div>
        
        <div className="nav-middle flex-div">
           <div className="search-box flex-div">
           <input type="text"  placeholder='Search'/>
           <img src={search_icon} alt="" />
           </div>
        </div>

        <div className="nav-right">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={noti_icon} alt="" />
            <img src={profile_icon}  className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar