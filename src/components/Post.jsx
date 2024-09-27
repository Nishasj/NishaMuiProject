import React from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
// import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';

const Post = () => {
  return (
    <Card sx={{margin:2}} bgcolor={"background.default"} color={'text.primary' }    >
    <CardHeader
      avatar={
        <Avatar sx={{bgcolor:"red"}} aria-label="recipe">
          J
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Joe"
      subheader="September 23, 2024"
    />
    <CardMedia
      component="img"
      height="500"
      image="https://i.pinimg.com/564x/83/33/be/8333beeaed9ab42f0fc590e26f2b6986.jpg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      The moon, a fiery orb of amber, paints the sky with strokes of molten gold. Its luminous glow bathes the rocky cliff in a soft, ethereal light, casting long, dancing shadows that seem to dance with the moon's celestial rhythm. A solitary tree, a silhouette against the moon's radiance, stands as a sentinel, guarding the precipice from the encroaching night. The scene is a breathtaking symphony of light and darkness, a celestial tapestry woven with threads of wonder and mystery.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>

   
  )
}

export default Post