import React from 'react'
import { IoMdClose } from "react-icons/io";
import { toggleCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleCart())
    }
    return (
        <div className='w-2/6 h-screen bg-white  border-l-1 border-black fixed right-1 top-1 z-50 overflow-y-scroll '

        >
            <IoMdClose onClick={handleClose} className='text-black text-4xl   top-3 cursor-pointer ' />
            <hr className="border-t-1 border-black " />

        </div>
    )
}

export default Cart