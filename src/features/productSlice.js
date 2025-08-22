import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:{
        isOpen:false
    },
    reducers:{
        toggle:(state,action)=>{
            state.isOpen=!state.isOpen;
        }
    }
})

export const toggle = productSlice.action
export default productSlice.reducer