import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[],
    userInfo:[],

}

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            state.products =action.payload
        },
        setUserInfo: (state, action) =>{
            state.userInfo = action.payload
        }
    }
})

export const {
    addToCart,
    setUserInfo
} = dashboardSlice.actions;

export default dashboardSlice.reducer