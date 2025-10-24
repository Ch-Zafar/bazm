import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    
  ],
  isOpen:false ,
  checkoutVisible:false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart:(state,action)=>{
      state.isOpen=!state.isOpen
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // Increase quantity instead of overwriting
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // If quantity is 1, remove item completely
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
    handleCheckoutVisiblity:(state)=>{
        state.checkoutVisible=!state.checkoutVisible
    }
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart,toggleCart, handleCheckoutVisiblity } =cartSlice.actions;
export default cartSlice.reducer;
