import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position='static'  sx={{backgroundColor:"#254061"}}>
        <Toolbar>
               
                <Typography variant="h6" 
                    component="div">
                    <Link style={{textDecoration:"none",color:"white"}}   to="/"> Todo Task1 </Link>
                </Typography>
                

                <Link  style={{textDecoration:"none",color:"white",marginLeft:"15px"}}  to="/"  color="inherit">Home</Link>
                <Link  style={{textDecoration:"none",color:"white",marginLeft:"15px"}}   to="/addtodo" color="inherit">Add List</Link>
            </Toolbar>
    </AppBar>
  )
}

export default Header