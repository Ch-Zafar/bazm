import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";

const Greenbutton = () => {
  return (
    <div
        className='w-[50px] h-[40px] bg-green rounded-lg border-2 bg-green bg-black border-white  text-white flex items-center justify-center mx-5'
    >
        
    <MdOutlineAccountCircle  className='text-white text-2xl '/>
    </div>
  )
}

export default Greenbutton