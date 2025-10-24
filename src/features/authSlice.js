import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
       {
        user:JSON.parse(localStorage.getItem('user'))|| null,
        isLoading:false,
        isError:false,
        message:'',
       }
    ],
    isVisible:false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleVisibility:(state,action)=>{
            state.isVisible=!state.isVisible;
            console.log(state.isVisible)
        }
        
    },

})

export const {Login,toggleVisibility} =authSlice.actions;

export default authSlice.reducer