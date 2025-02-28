import React from 'react'
import { useWeather } from '../Context/WeatherContext'


const Card = () => {


  const weather = useWeather();
  return (
    <div className='card'>
      <img src={weather?.data?.current?.condtion?.icon}/>
      <h2>{weather.data?.current?.temp_c}</h2>
      <h4>City name, State, Country</h4>


    </div>
  )
}

export default Card