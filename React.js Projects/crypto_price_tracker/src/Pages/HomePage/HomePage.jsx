import React, { useContext, useState } from 'react'


import './HomePage.css'
import CryptoTable from '../../Components/CryptoTable/CryptoTable'
import { CoinContext } from '../../Context/coinContext';

const HomePage = () => {

  const [inputData, setInputData] = useState('');


  const {allCoins, displayCoin, setDisplayCoin} = useContext(CoinContext);





  const handleInput = () =>{
      setInputData(event.target.value);
      if(event.target.value === ""){
        setDisplayCoin(allCoins)
      }
  }


  const searchHandler = async (event) =>{
    event.preventDefault();

    const coins = await allCoins.filter((coin) =>{
        return coin.name.toLowerCase().includes(inputData.toLowerCase())
    })


    setDisplayCoin(coins)

  }



  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryprocurrency marketplace. Signup to explore more about cryptos.</p>
            <form onSubmit={searchHandler}>
                
                
                
                <input onChange={handleInput} list='coinlist' value={inputData} type="text" placeholder='Search Crypto..' required/>
                <datalist id='coinlist'>
                  {allCoins.map((coin, index) =>{
                      return(
                        <option key={index} value={coin.name}></option>
                      )
                  })}
                </datalist>
                
                
                <button type='submit'>Search</button>
            </form>
        </div>


        <CryptoTable/>
    </div>
  )
}

export default HomePage