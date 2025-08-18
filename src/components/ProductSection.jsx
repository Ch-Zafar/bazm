import React, { createContext, useContext, useState } from 'react'
import Productcard from './Productcard'
import ProductDetail from './ProductDetail'



const ProductSection = () => {


  return (
    <div className='w-full h-auto py-20 px-20'>
        <Productcard/>
        <ProductDetail/>


    </div>
  )
}

export default ProductSection