// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import authSlice from '../features/authSlice'

// import productSlice from '../features/productSlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    auth:authSlice,
    
  },
})
