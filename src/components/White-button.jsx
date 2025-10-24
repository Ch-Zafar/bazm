import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../features/cartSlice'

const Whitebutton = () => {
  const dispatch = useDispatch()

  const handleOpeningcart = () => {
    dispatch(toggleCart())
  }

  return (
    <>
      {/* Desktop & Tablet Version - Icon with Text */}
      <button
        onClick={handleOpeningcart}
        className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer "
      >
        <ShoppingCart size={20} />
        <span>Cart</span>
      </button>

      {/* Mobile Version - Icon Only */}
      <button
        onClick={handleOpeningcart}
        className="sm:hidden flex items-center justify-center w-10 h-10 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
      >
        <ShoppingCart size={20} />
      </button>
    </>
  )
}

export default Whitebutton