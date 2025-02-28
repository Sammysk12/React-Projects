//important tools for injecting the code
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//react-router-dom package tools for react-routing
import {BrowserRouter} from 'react-router-dom'

//global css file for the app
import './index.css'

//App Component which is to be rendered in this main file throungh inject
import App from './App.jsx'

//imported the pprovider function of the coin context for wrap the app component into the provider to pass props easily anywhere in application
import CoinContextProvider from './Context/coinContext.jsx'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <CoinContextProvider>
    <App />
    </CoinContextProvider>
    </BrowserRouter>

   
  </StrictMode>,
)
