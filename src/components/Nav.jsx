import React, { useState } from 'react'
import Whitebutton from './White-button'
import Greenbutton from './Green-button'
// Mock components for demonstration

// Mock Link component for demonstration
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>{children}</a>
)

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <div className='w-11/12 h-[50px] bg-white/30 backdrop-blur-md flex justify-between fixed top-5 border-2 border-white/40 rounded-xl z-20 mx-auto left-1/2 transform -translate-x-1/2'>
        {/* Logo Section */}
        <div className="w-1/3 flex items-center pl-2">
          <img
            className='w-[50px] h-[50px]'
            src="/WhatsApp Image 2025-08-02 at 23.29.11_af1d3f56 (1).png"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation Links */}


        {/* Desktop Buttons */}
        <div className="w-1/3  flex flex-row justify-end items-center gap-2 pr-2">
          <Whitebutton />
          <Greenbutton />
        </div>

        {/* Mobile Hamburger Menu Button */}

      </div>

      {/* Mobile Menu Overlay */}

      {/* Mobile Menu Panel */}
     
    </>
  )
}

export default Nav