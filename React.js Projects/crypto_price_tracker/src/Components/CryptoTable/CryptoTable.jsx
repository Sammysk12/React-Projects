import React, { useContext, useEffect, useState } from 'react'
import './CryptoTable.css'
import { CoinContext } from '../../Context/coinContext'
import { Link } from 'react-router-dom';

const CryptoTable = () => {


  //All coins from the context
  const {allCoins, currency, displayCoin,setDisplayCoin} = useContext(CoinContext);

 






  useEffect(()=>{

    setDisplayCoin(allCoins);

  },[allCoins])


  return (
    <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24H Change</p>
                <p className='market-cap'>Market Cap</p>
            </div>

            {
              displayCoin.slice(0,10).map((coin, index) =>{
                return (<Link to={`/coin/${coin.id}`} className="table-layout" key={index}>
                  <p>{coin.market_cap_rank}</p>

                  <div className='img-with-name'>
                  <img src={coin.image} alt="" />
                  <p>{coin.name} - {coin.symbol}</p>
                  </div>
                  
                  <p>{currency.symbol} {coin.current_price.toLocaleString()}</p>
                  <p  className={coin.price_change_24h>0?"green":"red"}>{Math.floor(coin.price_change_24h*100)/100}</p>
                  <p className='market-cap'>{currency.symbol} {coin.market_cap.toLocaleString()}</p>
                </Link>
                )
              })
            }
        </div>
  )
}

export default CryptoTable