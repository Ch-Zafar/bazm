import React, { createContext, useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'
import ActionButton from '../components/ActionButton'

import Productcard from '../components/Productcard';
import ProductSection from '../components/ProductSection';
import { useSelector } from 'react-redux';

export const Context = createContext();

const Home = () => {
  const authVisibility = useSelector((state)=> state.auth.isVisible);
  useEffect(()=>{
     if(authVisibility){
      document.body.classList.add('overflow-hidden') 
    }
    else{
      document.body.classList.remove('overflow-hidden') 

    }
  },[authVisibility])
  const videoRef = useRef();
  const [isActive, setIsactive] = useState(false);

  useEffect(() => {
  if (isActive && videoRef.current) {
  

    // try to play the video
    videoRef.current.play().catch(() => {
      console.log("Video Blocked");
    });
  } else {
    // when overlay is visible → stop background scroll
    document.body.style.overflow = "hidden";
  }

  // cleanup on unmount just in case
  return () => {
    document.body.style.overflow = "auto";
  };
}, [isActive]);


  return (
    <Context.Provider value={[isActive, setIsactive]}>
      <div className='w-full h-auto flex justify-center items-center relative flex-col'>
        <Nav />


        <div className='w-full h-screen bg-cover flex overflow-hidden'>


          {/* Left Image */}
          <div className="w-1/3 h-full flex relative">
            <img
              src="/WhatsApp Image 2025-08-13 at 07.06.13_92a4c78f.jpg"
              alt=""
              className='absolute inset-0 w-full h-full object-cover blur-lg scale-110'
            />
            <img
              src="/WhatsApp Image 2025-08-13 at 07.06.13_92a4c78f.jpg"
              alt=""
              className='relative w-full h-full object-contain'
            />
          </div>

          {/* Center Video */}
          <div className="w-1/3 h-full relative">
            <video
              ref={videoRef}
              className='w-full h-full '
              src='/WhatsApp Video 2025-08-13 at 10.19.00_dc3d8428.mp4'
              loop
              muted
              playsInline
              autoPlay={isActive}
            />
          </div>

          {/* Right Image */}
          <div className="w-1/3 h-full flex relative">
            <img
              src="/WhatsApp Image 2025-08-13 at 07.06.13_af497365.jpg"
              alt=""
              className='absolute inset-0 w-full h-full object-cover blur-lg scale-110'
            />
            <img
              src="/WhatsApp Image 2025-08-13 at 07.06.13_af497365.jpg"
              alt=""
              className='relative w-full h-full object-contain'
            />
          </div>
        </div>



        {/* //////////////product_section////////////////// */}

          <div className='w-full h-screen bg-white'>
              <ProductSection/>
          </div>



        {/* Transparent Overlay */}
        {!isActive && (
          <div className=" w-full h-screen fixed z-10  inset-0 bg-white/80 flex flex-col justify-center items-center transition-all overflow-hidden">
            <img src="/logo.png" alt="" className='w-[500px] h-[500px]' />
            <ActionButton />
          </div>
        )}

      </div>
    </Context.Provider>
  );
}

export default Home;
