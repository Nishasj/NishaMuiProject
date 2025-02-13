import { Avatar, Box, Button, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ButtonGroup from '@mui/material/ButtonGroup';



const StyledModal=styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const Userbox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
    
})






const Add = () => {
    const [open, setOpen] = useState(false)
  return (
<><Tooltip onClick={e=>setOpen(true)}
     title="ADD NEW POST" sx={{position:"fixed",bottom:20, left: { xs:'calc(50% - 25px)', md:30 }}}>

    <Fab color="primary" aria-label="add" >
      <AddIcon />
    </Fab> 
  </Tooltip>
  <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
    <Typography variant='h6' 
                color='black' 
                textAlign='center'>
        Create Post
   </Typography>
   <Userbox>
    <Avatar
        sx={{width:30, height:30}} 
        src="https://www.creativefabrica.com/wp-content/uploads/2023/02/14/Cute-Boy-Searching-Something-Cartoon-Super-Cute-Profile-Pic-61207531-1.png">
    </Avatar>
    <Typography variant='span' fontWeight={500}>Joe</Typography>
   </Userbox>
   <TextField sx={{width:'100%', color:'black'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction='row' gap="1" mt={2} mb={3}>
       <EmojiEmotionsIcon color= 'primary'  />
       <Image color='secondary'/>
       <VideoCameraBack color='success'/>
       <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRange/></Button>
</ButtonGroup>

  </Box>
</StyledModal></>
  )
}

export default Add