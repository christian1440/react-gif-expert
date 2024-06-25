import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './styles.css';

//Aqui se arranca nuestra app llamando al GiftExpertApp

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftExpertApp />
  </React.StrictMode>
)
