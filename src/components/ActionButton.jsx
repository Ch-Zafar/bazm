import React, { useContext } from 'react'
import { Context } from '../pages/Home'

const ActionButton = ({ visibility }) => {
  const [isActive, setIsactive] = useContext(Context)
  return (
    <button onClick={() => {
      setIsactive(true)
    }} className='w-[300px] h-[80px] bg-black text-white rounded-3xl text-2xl cursor-pointer hover:scale-103 transition-all font-Orbitron'>
      Begin your journey !
    </button>
  )
}

export default ActionButton