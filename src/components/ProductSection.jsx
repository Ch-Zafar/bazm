import React, { createContext, useContext, useState } from 'react'
import Productcard from './Productcard'
import ProductDetail from './ProductDetail'
import CanvasModel from '../canvas/CanvasModel'


const ProductSection = () => {


  return (
    <div className='w-full h-auto  py-10 px-20 bg-black'>
        {/* <Productcard/>
        <ProductDetail/> */}
        <CanvasModel/>
        


    </div>
  )
}

export default ProductSection