import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'
// import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
// import { red } from '@mui/material/colors'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ShareIcon from '@mui/icons-material/Share';
// import { Favorite, FavoriteBorder } from '@mui/icons-material';


const Feed = () => {
  return (
    <Box bgcolor={"background.default"} color={'text.primary' }  flex={4}  p={2}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </Box>
  )
}

export default Feed