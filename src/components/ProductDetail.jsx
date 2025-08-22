import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
// import { toggle } from '../features/productSlice';


const ProductDetail = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggle())
  }




  return (
    <div className='w-11/12 h-4/5 bg-white absolute top-20    border-1 border-black rounded-2xl overflow-y-scroll'>
      <IoMdClose onClick={handleClose} className='text-black text-4xl absolute right-5  top-3 cursor-pointer ' />


    </div>
  )
}

export default ProductDetail