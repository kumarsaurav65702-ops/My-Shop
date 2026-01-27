import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CountContext from './context/CountContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <CountContext>
     <App />
   </CountContext>
 </BrowserRouter>
   
 
)
