import {createContext, CreateContext, useContext, useState} from'react';
import { getWeatherForCity } from '../Api/getWeatherApi';

const WeatherContext = createContext(null);

export const useWeather = () => { 
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {

    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);


    const fetchData = async () =>{
        const response = await getWeatherForCity(searchCity);
        setData(response);

    }

    return <WeatherContext.Provider value ={{data, searchCity, setSearchCity, fetchData}}>{props.children}</WeatherContext.Provider>
}