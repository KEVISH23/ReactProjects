import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async(values)=>{
        try{
            const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=13b01d1e94e545889dd70343232303&q=${values}&aqi=no`)
            // console.log(res.status)
            return res.data
        }catch(err){
            throw err
        }
    }
)