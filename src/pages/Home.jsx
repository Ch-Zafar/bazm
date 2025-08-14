import React from 'react'
import Nav from '../components/Nav'
import HeroImg from "/public/WhatsApp Image 2025-08-06 at 07.33.26_abdd3581.jpg"
const Home = () => {
  return (
    <div className=' w-full h-screen   flex justify-center'>
      <Nav/>
      {/* hero section /////////// */}
    
      <div className=' w-full h-screen bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${HeroImg})` }}>
          {/* <img className='w-full h-full ' src="/WhatsApp Image 2025-08-06 at 07.33.26_abdd3581.jpg" alt="" srcset="" /> */}
      </div>
    
    
    
    
    </div>
  ) 
}

export default Home