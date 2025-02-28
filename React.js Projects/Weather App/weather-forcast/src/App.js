
import { useEffect } from 'react';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import { useWeather } from './Context/WeatherContext';

function App() {

const weather = useWeather();

  return (
    <div className="App">
      <h1>Weather Forcast</h1>
      
      <Input/>
      <Button value='Search city' onClick = {weather.fetchData}/>
      <Card/>
      <Button value='Refresh'/>


    </div>
  );
}

export default App;
