import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import Add_list from '../components/Add_list'
import Update_list from '../components/Update_list'
import Error404 from '../components/Error404'
import Header from '../components/Header'
const Index = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/addtodo" element={<Add_list/>} />
            <Route path="/updatetodo/:id" element={<Update_list/>} />
            <Route path="/showerror" element={<Error404/>} />
            <Route path="*" element={<Error404/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Index