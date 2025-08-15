import React from 'react'
import { CiShoppingCart } from "react-icons/ci";


const Whitebutton = () => {
  return (
    <div
        className='w-[50px] h-[40px] bg-white rounded-lg border-2 border-black  text-white flex items-center justify-center mx-5 '
    >
        <CiShoppingCart className='text-black text-2xl ' />
        
    </div>
  )
}

export default Whitebutton