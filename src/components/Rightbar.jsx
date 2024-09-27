import { Avatar, AvatarGroup, Box,Divider,ImageList,ImageListItem,List,ListItem,ListItemAvatar,ListItemText,Typography } from '@mui/material'
import React from 'react'


const Rightbar = () => {
  return (
    <Box bgcolor={"background.default"} color={'text.primary' } flex={2} p={2}  sx={ {display:{xs:'none', sm:'block'}} }>
      <Box position="fixed" width={300}>
        <Typography mt={1} >Online Friends</Typography>
        <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://i.pinimg.com/474x/e7/d9/d7/e7d9d763caf7ae1f6fbe69c5e18f5eee.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://i.pinimg.com/474x/c2/41/a7/c241a77f2d6c5044586405e5df86dde6.jpg" />
  <Avatar alt="Agnes Walker" src="https://i.pinimg.com/474x/9d/07/da/9d07daa42d930a32e6b32516e4e85978.jpg" />
  <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/474x/65/a8/0f/65a80f50c83eea9f2d6a2d378f93ee92.jpg" />
  <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/474x/60/3d/db/603ddba621ce0634a24c12106008f1b2.jpg" />
  <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/474x/47/b6/ab/47b6ab7638a37d775539f4969962ff99.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant='h6'   fontWeight={100} mt={2} mb={2}>
  Latest Posts
</Typography>
<ImageList cols={3} rowHeight={50} gap={10} >
  <ImageListItem>
    <img src='https://i.pinimg.com/474x/82/37/b6/8237b6ff21f1a881ee48a646f7925833.jpg' 
     alt=''/>
  </ImageListItem>

  <ImageListItem>
    <img src='https://i.pinimg.com/736x/3a/c1/81/3ac181af1daa0ab98687ac6abe380c7c.jpg' 
     alt=''/>
  </ImageListItem>

  <ImageListItem>
    <img src='https://i.pinimg.com/474x/97/f3/25/97f325eafbaaa93e3a83fa6129a9b706.jpg' 
     alt=''/>
  </ImageListItem>

  <ImageListItem>
    <img src='https://i.pinimg.com/474x/1f/e2/3f/1fe23f6b8523a182b13299a04612d2a2.jpg' 
     alt=''/>
  </ImageListItem>

  <ImageListItem>
    <img src='https://i.pinimg.com/474x/42/6a/35/426a35fb6102dd7f4fcf49464a710f96.jpg' 
     alt=''/>
  </ImageListItem>
  </ImageList>

<Typography variant='h6'   fontWeight={100} mt={2} mb={2}>
  Latest Conversations
</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>



      </Box>
    </Box>
  )
}

export default Rightbar