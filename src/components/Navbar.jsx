import {AppBar,Avatar,Badge,styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { InputBase } from '@mui/material';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%",
}))


const Icon = styled("Box")(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
 
}));
const UserBox = styled("Box")(({theme})=>({
  display:"flex", gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
 
}));



const Navbar = () => {
  const [open,setOpen]= useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6'  sx={ {display:{xs:'none', sm:'block'}} }>
          VIBE LIFE
        </Typography>
        <Diversity1Icon  sx={ {display:{xs:'block', sm:'none'}} }/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icon><Badge badgeContent={4} color="error">
           <Mail/>
          </Badge>
          <Badge Badge badgeContent={2} color="error">
          <Notifications />
          </Badge>
          <Avatar sx={{width:30, height:30}}  
                  src="https://www.creativefabrica.com/wp-content/uploads/2023/02/14/Cute-Boy-Searching-Something-Cartoon-Super-Cute-Profile-Pic-61207531-1.png" 
                  onClick={(e)=>setOpen(true)}
                  />
                 
          </Icon>
          <UserBox>
          <Avatar sx={{width:30, height:30}}  
                  src="https://www.creativefabrica.com/wp-content/uploads/2023/02/14/Cute-Boy-Searching-Something-Cartoon-Super-Cute-Profile-Pic-61207531-1.png"
                  onClick={(e)=>setOpen(true)}
                  />
                   
          <Typography variant='span'>Joe</Typography>
          </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    
  )
}

export default Navbar