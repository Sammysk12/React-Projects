//important react tools 
import React, { useContext } from 'react'

//custom css file for this component navbar
import './Navbar.css'

//media for this component 
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'
import { CoinContext } from '../../Context/coinContext'
import { Link } from 'react-router-dom'


const Navbar = () => {



    const {setCurrency} = useContext(CoinContext);

    const handleCurrency = (event) =>{
        switch(event.target.value){
            case "usd" :{
                setCurrency({name: "usd", symbol:"$"});
                break;
            }
            case "eur" :{
                setCurrency({name: "eur", symbol:"€"})
                break;
            }
            case "inr" :{
                setCurrency({name: "inr", symbol:"₹"});
                break;

            }
            default:{
                setCurrency({name: "usd", symbol:"$"});
                break;
            }
        }
    }


  return (
    <div className='navbar'>
        
        <Link to={'/'}>
        <img src={logo} alt="" className='logo'/>
        </Link>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>

        <div className="nav-right">
            <select onChange={handleCurrency}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>

            <button>Sign Up <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar