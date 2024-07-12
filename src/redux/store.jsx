import { configureStore } from '@reduxjs/toolkit'
// connecting the slice with the store
import dashboardReducer from "../redux/dashboardSlice"

export const store = configureStore({
    reducer: {dashboardReducer}
})