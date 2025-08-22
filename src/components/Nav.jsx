import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Whitebutton from './White-button'
import Greenbutton from './Green-button'


const Nav = () => {


  return (
    <div
      className='w-11/12 h-[50px] bg-white/5 backdrop-blur-lg flex fixed top-5 border-1 border-white rounded-xl z-10 '
    >
      <div
        className="w-1/3  ">

        <img className='w-[50px] h-[50px]' src="/WhatsApp Image 2025-08-02 at 23.29.11_af1d3f56 (1).png" alt="" srcset="" />

      </div>
      <div className="w-1/3 flex justify-center h-auto  ">
        <div className='flex w-full justify-between items-center text-white'>
          <Link to={'/'}>Home</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/product'}>Product</Link>
        </div>

      </div>
      <div className="w-1/3 flex justify-end items-center">
        <Whitebutton/>


        <Greenbutton/>

      </div>
      
    </div>
    

  )
}

export default Nav