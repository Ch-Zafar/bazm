import React, { useContext } from 'react'
import { Context } from '../pages/Home';

const ActionButton = () => {
    const [isActive,setIsactive]=useContext(Context);

    const onClick=()=>{
      setIsactive(true)
    }
  
  return (
    <button onClick={onClick}  className='w-[300px] h-[80px] bg-black text-white rounded-3xl text-2xl cursor-pointer hover:scale-103 transition-all font-Orbitron'>
        Begin your journey !
    </button>
  )
}

export default ActionButton