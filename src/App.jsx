
import Home from "./components/Home"
import Nav from "./components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Products from "./components/Products"
import Cart from "./components/Cart"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Admin from "./components/Admin"
import ProductDetail from "./components/ProductDetail"
import AddProduct from "./components/AddProductAdmin"
import EditProduct from "./components/EditProductAdmin"
import Footer from "./components/Footer"
import SobreNosotros from "./components/SobreNosotros"
import Contacto from "./components/Contacto"
import Register from "./components/Register"


function App() {

  return(
    <Router>
      <>
        <Nav/>
        <Routes>
          {/*Rutas del User/Generales*/}
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={ <Products/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
            <Route path="/cart" element={ <Cart/>}/>
            <Route path="/login" element={ <Login/>}/>
            <Route path="/register" element={ <Register/>}/>
            <Route path="/sobreNosotros" element={ <SobreNosotros/>}/>
            <Route path="/contacto" element={ <Contacto/>}/>

            {/*Rutas del Admin*/}
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/admin/addProduct" element={<AddProduct/>}/>
            <Route path="/admin/editProduct/:id" element={<EditProduct/>}/>
        </Routes>
        <Footer/>
      </>
    </Router>
  )
}

export default App
