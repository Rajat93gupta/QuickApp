import VerticalTabs from '@/app/sidebarComponent/VerticalTabs';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Account = () => {
  return (
    <Box sx={{ width: 'calc(100vw - 129px)', height: "100vh" }}>
      <Typography variant='h5' sx={{ px: 4, py: 2 }}>Account Setting</Typography>
      <Container maxWidth={false} sx={{ 
          background: "#D3D3D3", 
          py: 4, 
          height: 'calc(100vh - 64px)', // Adjust the height considering the title
          overflowY: 'auto',}}>
        <VerticalTabs/>
      </Container>
    </Box>
  );
};

export default Account;
