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
    <div onClick={handleOpeningcart}
        className='cursor-pointer w-[50px] h-[40px] bg-white rounded-lg border-2 border-black  text-white flex items-center justify-center mx-5 '
    >
        <CiShoppingCart className='text-black text-2xl ' />
        
    </div>
  )
}

export default Whitebutton