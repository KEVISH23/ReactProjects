import { configureStore } from "@reduxjs/toolkit";
import  weatherSlice  from "./weatherslice";
export const store = configureStore({
    reducer:{
        weather:weatherSlice
    }
})