import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toggleCart } from '../features/cartSlice';


const Whitebutton = () => {
  const dispatch=useDispatch();

  const handleOpeningcart=()=>{
    dispatch(toggleCart())
  }
  return (
   <button
   onClick={handleOpeningcart}
   className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"><CiShoppingCart/></button>
  )
}

export default Whitebutton