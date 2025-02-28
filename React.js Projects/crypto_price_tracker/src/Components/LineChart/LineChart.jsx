import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts';
const LineChart = ({historicalData}) => {
 
    const [chartData, setChartData] = useState([["Date", "Prices"]])
 
    useEffect(() =>{
       let dataCopy = [["Date", "Prices"]];
       if(historicalData.prices){
            historicalData.prices.map((data) =>{
                dataCopy.push([`${new Date(data[0]).toLocaleDateString().slice(0,-5)}`, data[1]])
            })

        setChartData(dataCopy);
       }
    }, [historicalData])
 
    return (
    <div>
        <Chart
        chartType='LineChart'
        data={(chartData)}
        height="100%"
        legendToggle
        />
        
    </div>
  )
}

export default LineChart