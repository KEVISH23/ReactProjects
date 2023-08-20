import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://localhost:3001/list"
export const showTodo = createAsyncThunk(
    "todo/showTodo",
    async ()=>{
        try{
            const res = await axios.get(`${URL}`)
            return res.data
        }catch(err){
            throw err
        }
    }
)

export const addTodo = createAsyncThunk(
    "todo/addTodo",
    async(values)=>{
        const date = new Date().toDateString()
        try{
            const res = await axios({
                method:"POST",
                url:URL,
                data:{...values,date}
            })
           return res.status
            
        }catch(err){
            throw err
        }
    }
)

export const deleteTodoById = createAsyncThunk(
    "todo/deleteTodoById",
    async(id)=>{
        try{
            const confirm = window.confirm("Are you sure you want to delete?")
            if(confirm){
                const res = await axios.delete(`${URL}/${id}`)
                return res.status
                // console.log(res)
            }else{

            }
        }
        catch(err){
            throw err
        }
    }
)

export const getSingle = createAsyncThunk(
    "todo/getSingle",
    async(id)=>{
        try {
            const res = await axios.get(`${URL}/${id}`)
            return res.data
        }catch(err){
            throw err
        }
    }
)

export const updateTodoById = createAsyncThunk(
    "todo/updateTodoById",
    async(values)=>{
        try{
            const res = await axios.put(`${URL}/${values.id}`,values)
            console.log(res)
            return res.status
        }
        catch(err){
            throw err
        }
    }
)