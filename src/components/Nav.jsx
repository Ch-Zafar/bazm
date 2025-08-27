import React, { useState } from 'react'
import Whitebutton from './White-button'
// Mock components for demonstration
const Greenbutton = () => <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Green Button</button>

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
      <div className='w-11/12 h-[50px] bg-white/30 backdrop-blur-md flex fixed top-5 border-2 border-white/40 rounded-xl z-20 mx-auto left-1/2 transform -translate-x-1/2'>
        {/* Logo Section */}
        <div className="w-1/3 flex items-center pl-2">
          <img 
            className='w-[50px] h-[50px]' 
            src="/WhatsApp Image 2025-08-02 at 23.29.11_af1d3f56 (1).png" 
            alt="Logo" 
          />
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="w-1/3 hidden md:flex justify-center h-auto">
          <div className='flex w-full justify-between items-center text-white font-medium'>
            <Link to={'/'} className='hover:text-gray-200 transition-colors duration-200'>Home</Link>
            <Link to={'/contact'} className='hover:text-gray-200 transition-colors duration-200'>Contact</Link>
            <Link to={'/product'} className='hover:text-gray-200 transition-colors duration-200'>Product</Link>
          </div>
        </div>
        
        {/* Desktop Buttons */}
        <div className="w-1/3 hidden md:flex justify-end items-center gap-2 pr-2">
          <Whitebutton/>
          <Greenbutton/>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex-1 md:hidden flex justify-end items-center pr-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-15 md:hidden" onClick={toggleMenu} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-md border-l-2 border-white/40 z-25 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/20">
            <img 
              className='w-10 h-10' 
              src="/WhatsApp Image 2025-08-02 at 23.29.11_af1d3f56 (1).png" 
              alt="Logo" 
            />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded p-1"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 px-4 py-6">
            <div className="flex flex-col space-y-4">
              <Link 
                to={'/'} 
                className='text-gray-700 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-white/50 transition-all duration-200'
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to={'/contact'} 
                className='text-gray-700 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-white/50 transition-all duration-200'
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to={'/product'} 
                className='text-gray-700 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-white/50 transition-all duration-200'
                onClick={toggleMenu}
              >
                Product
              </Link>
            </div>
          </nav>

          {/* Mobile Buttons */}
          <div className="p-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              <div onClick={toggleMenu}>
                <Whitebutton />
              </div>
              <div onClick={toggleMenu}>
                <Greenbutton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav