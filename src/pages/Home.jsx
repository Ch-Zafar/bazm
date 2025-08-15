import React, { useState } from 'react'
import Nav from '../components/Nav'
import HeroImg from "/public/WhatsApp Image 2025-08-06 at 07.33.26_abdd3581.jpg"
import ActionButton from '../components/ActionButton'
const Home = () => {
  const [isActive,setIsactive]=useState('false')
  return (
    <div className=' w-full h-screen   flex justify-center'>
      <Nav />
      {/* hero section /////////// */}

      <div className=' w-full h-screen  bg-cover flex  '  >
        <div className="w-1/3 h-full">
          <img src="/WhatsApp Image 2025-08-13 at 07.06.13_92a4c78f.jpg" alt="" className='w-full h-full' />
        </div>
        <div className="w-1/3 h-full">
          <video
            className='w-full h-full block object-cover'
            src='/WhatsApp Video 2025-08-13 at 10.19.00_dc3d8428.mp4'
            autoPlay={isActive===true}
            loop
            muted
            playsInline

          />
        </div>
        <div className="w-1/3 h-full">
          <img src="/WhatsApp Image 2025-08-13 at 07.06.13_af497365.jpg" alt="" className='w-full h-full' />
        </div>
        {/* //////////for transparent white overlay/////////// */}
        <div className="absolute inset-0 bg-white/80 flex flex-col justify-center items-center">
            <img src="/logo.png" alt="" className='w-[500px] h-[500px]' />
            <ActionButton/>
            
        
        
        
        </div>

      </div>




    </div>
  )
}

export default Home