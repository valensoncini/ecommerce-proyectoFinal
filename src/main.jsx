import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'
import { ProductsProvider } from './contexts/ProductsContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
    <CarritoProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </CarritoProvider>
    </ProductsProvider>
  </StrictMode>,
)
