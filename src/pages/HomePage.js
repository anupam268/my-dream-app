// src/pages/HomePage.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function HomePage() {
  return (
    <Box sx={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#b22a00', lineHeight: 1.2 }}>
        Welcome to My Dream App
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '20px', fontSize: '18px', color: '#555', lineHeight: 1.5 }}>
        This is the homepage of the application. You can navigate to the Weekly Platform Production Review from the header.
      </Typography>
    </Box>
  );
}

export default HomePage;
