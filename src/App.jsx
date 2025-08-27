import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { useSelector } from 'react-redux'
import Cart from './components/Cart'

const App = () => {
    const isOpen=useSelector((state)=>state.cart.isOpen)

  return (
    
   <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/product" element={<Product />} />
       
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    {
        isOpen?
          <Cart/>:null
      }
   
   
   </>
  );
};

export default App;
