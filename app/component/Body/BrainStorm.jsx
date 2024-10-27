import Image from 'next/image';
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Brainstorm = () => {
  return (
    <Box sx={{ backgroundColor: '#6B0EAD', py: { xs: 4, md: 12 }, position: 'relative' }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative' }}>
        <Typography variant="h6" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', color: 'white' }}>
          Start building ideas
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', mt: 2 }}>
          Brainstorm now!
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: 'Roboto', color: 'white', mt: 2 }}>
          Let’s transform your vision into reality with our easy-to-use
          <br /> app building platform!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '8px',
            mt: 2,
            px: 4,
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          Request Demo
        </Button>
      </Container>

      {/* Right image */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: -4,
          display: { xs: 'none', md: 'block' }, 
        }}
      >
        <Image src="/Iphones.png" height={400} width={506} alt="brainstorm" />
      </Box>

      {/* Left image */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: -4,
          display: { xs: 'none', md: 'block' }, 
        }}
      >
        <Image src="/ellipses.png" height={300} width={400} alt="brainstorm" />
      </Box>
    </Box>
  );
}

export default Brainstorm;
