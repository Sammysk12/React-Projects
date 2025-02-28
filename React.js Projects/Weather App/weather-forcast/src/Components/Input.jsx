import React from 'react'
import { useWeather } from '../Context/WeatherContext';




const Input = () => {

  const weather = useWeather();
  console.log(weather);
  return (
    <div>
      <input type="text" 
      className='input-field' 
      value ={weather.searchCity} 
      onChange={(e) => weather.setSearchCity(e.target.value)}/>
    </div>
  )
}

export default Input