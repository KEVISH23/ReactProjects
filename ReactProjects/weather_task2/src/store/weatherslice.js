import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "./thunks";

export const weatherSlice = createSlice({
    name:"weather",
    initialState:{
        
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getWeather.fulfilled,(state,action)=>{
            state.weatherList = action.payload
        })
    }
})

export default weatherSlice.reducer