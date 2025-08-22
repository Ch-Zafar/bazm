import React, { createContext, useContext, useState } from 'react'
import Productcard from './Productcard'
import ProductDetail from './ProductDetail'
import { useSelector } from 'react-redux'


const ProductSection = () => {
 //////////////toggle button for dialog box/////////////////
    const isOpen = useSelector((state)=> state.product.isOpen);

  return (
    <div className='w-full h-auto py-20 px-20  '>
        <Productcard/>

        {
          isOpen?
          <ProductDetail/>:null
        }

    </div>
  )
}

export default ProductSection