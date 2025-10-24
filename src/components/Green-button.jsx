import React from 'react'
import { User } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { toggleVisibility } from '../features/authSlice';

const Greenbutton = () => {
  const dispacth = useDispatch();
  const handleAuthVisible =()=>{
    dispacth(toggleVisibility());
  }
  return (
    
    <>
      {/* Desktop & Tablet Version - Full Text */}
      <button onClick={()=>handleAuthVisible()}  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
        <User size={20} />
        <span>Login</span>
      </button>

      {/* Mobile Version - Icon Only */}
      <button onClick={()=>handleAuthVisible()} className="sm:hidden flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
        <User size={20} />
      </button>
    </>
  )
}

export default Greenbutton