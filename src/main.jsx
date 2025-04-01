import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
