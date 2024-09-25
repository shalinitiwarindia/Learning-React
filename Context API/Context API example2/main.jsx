import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContextProvider } from './contexts/CartContext.jsx'
import { LangContextProvider } from './contexts/LanguageContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </LangContextProvider>
    
    
  </StrictMode>,
)
