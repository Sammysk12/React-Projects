//this is the context for the coin data

//importing context related tools here

import { createContext, useEffect, useState } from "react";


//created a context using createContext method(function)
export const CoinContext = createContext();


// created a function and passed props in it to wrap this function around the app component to pass the state anywhere in the through out application
const CoinContextProvider = (props) =>{

    const [allCoins, setAllCoins] = useState([]);
     //To store the specific coin data a state is created
      const [displayCoin, setDisplayCoin] = useState([]);

    const[currency, setCurrency] = useState({name:"usd", symbol:"$"});
 

    //This is a function for fetching all the coin data
    const fetchAllCoins = async() =>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-p4Qx4HoFfZA1b4ostjore5kw'}
          };
          
          await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoins(res))
            .catch(err => console.error(err));
    }







    //This is the useEffect hooks for everytime whenever the currency name changes it automatically rerenders the page
    useEffect(() =>{
        fetchAllCoins();
    },[currency])




    //This is one object which is created to store values and pass it through globally
    const contextValue = {
        allCoins, currency, setCurrency, displayCoin, setDisplayCoin

    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;