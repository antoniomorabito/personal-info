import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './common/Footer.jsx'
import Header from './common/Header.jsx'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Header/>
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
