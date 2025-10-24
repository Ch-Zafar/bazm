import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { useSelector } from 'react-redux'
import Cart from './components/Cart'
import Login_SignUp from "./pages/auth/Login_SignUp";
import Checkout from "./pages/Buy Now /Checkout";

const App = () => {
    const isOpen=useSelector((state)=>state.cart.isOpen)

  return (
    
   <>
     <Home/>
    
          <Cart/>
          <Login_SignUp/>
          <Checkout/>
      
   
   
   </>
  );
};

export default App;
