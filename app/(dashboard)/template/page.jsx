import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const Template = () => {
  return (
    <Box sx={{ width: 'calc(100vw - 129px)', height: "100vh" }}>
      <Box sx={{display:"flex" ,alignItems:"center", justifyContent:"space-between",p:2}}>
      <Typography variant='h5' sx={{ px: 4, py: 2 }}>Explore Ideas</Typography>
      <div>
      <input type='text'placeholder='colors, industries, or trends' style={{padding:"10px 20px", borderRadius:"20px"}}/>
      <Button>Filter</Button>
      </div>
      </Box>
      <Container maxWidth={false} sx={{ 
          background: "#D3D3D3", 
          py: 4, 
          height: 'calc(100vh - 64px)',
          overflowY: 'auto',}}>
        {/* <VerticalTabs/> */}
        container
      </Container>
    </Box>
  )
}

export default Template
