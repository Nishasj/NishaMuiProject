import { Box, List,ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Sidebar = ({mode,setMode}) => {
  return (
    <Box  bgcolor={"background.default"} color={'text.primary' }
         flex={1} 
         p={2} 
         sx={ {display:{xs:'none', sm:'block'}} }>
          <Box position="fixed" >
          <List>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Simple-list">
                      <ListItemIcon>
                        <HomeIcon/>
                      </ListItemIcon>
                       <ListItemText primary="Home"/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Simple-list">
                      <ListItemIcon>
                        <ArticleIcon/>
                      </ListItemIcon>
                       <ListItemText primary="Pages"/>
                    </ListItemButton>
                  </ListItem>


                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Simple-list">
                      <ListItemIcon>
                        <GroupsIcon/>
                      </ListItemIcon>
                       <ListItemText primary="Groups"/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Simple-list">
                      <ListItemIcon>
                        <StoreIcon/>
                      </ListItemIcon>
                       <ListItemText primary="MarketPlace"/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Simple-list">
                      <ListItemIcon>
                        <PeopleIcon/>
                      </ListItemIcon>
                       <ListItemText primary="Friends"/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Simple-list">
                      <ListItemIcon>
                        <SettingsSuggestIcon/>
                      </ListItemIcon>
                       <ListItemText primary="Settings"/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="##Simple-liste">
                      <ListItemIcon>
                        <AccountCircleIcon/>
                      </ListItemIcon>
                       <ListItemText primary="Profile"/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Simple-list">
                      <ListItemIcon>
                        <LogoutIcon/>
                      </ListItemIcon>
                       <ListItemText primary="Logout"/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#Simple-list">
                      <ListItemIcon>
                        <DarkModeIcon/>
                      </ListItemIcon>
                       <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
                    </ListItemButton>
                  </ListItem>
            </List>
            </Box>
    </Box>
  )
}

export default Sidebar