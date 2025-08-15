import React from 'react'

const Button = (color) => {
    const colors=color
  return (
    <div className={`w-[90px] h-[90px] bg-${color} text-black `}>Click</div>
  )
}

export default Button