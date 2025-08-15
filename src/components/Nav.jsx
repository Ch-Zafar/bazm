import React from 'react'
import Button from './Button'

const Nav = () => {
  return (
    <>
        <div className='w-11/12 h-[70px] bg-black rounded-2xl flex  '>
            <div className='w-1/3 h-auto  '>
                    <img className='w-[70px] h-[70px]' src="/logo.png" alt="" />
            </div>
            <div className='w-1/3 h-auto'>
                

            </div>
            <div className='w-1/3 h-auto '>
                <Button color={"white"} />
            </div>
        </div>
    
    </>
  )
}

export default Nav