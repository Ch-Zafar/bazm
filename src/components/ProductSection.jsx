import React, { createContext, useContext, useState } from 'react'
import Productcard from './Productcard'
import ProductDetail from './ProductDetail'
import CanvasModel from '../canvas/CanvasModel'


const ProductSection = () => {


  return (
    <div className='w-full h-screen  py-20 px-20'>
        {/* <Productcard/>
        <ProductDetail/> */}
        <CanvasModel/>
        


    </div>
  )
}

export default ProductSection