import { useState } from 'react'
import {  Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Header from './components/Header'
// import Footer from './components/Footer';
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from "./context/CartContext";
import ClothingDetail from './pages/ClothingDetail';


function App() {

  return (
    <>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopEasy/cart" element={<Cart />} />
        <Route path="/shopEasy/about" element={<About />} />
        <Route path="/shopEasy/product_details/:id" element={<ProductDetails/>} />
        <Route path="/shopEasy/clothing/:id" element={<ClothingDetail/>}/>

        <Route path="*" element={<Navigate to="/" />} />     {/* any unknown route goes home */}
      </Routes>
      {/* <Footer/> */}
    </CartProvider>  
    </>
  )
}

export default App
