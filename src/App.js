// src/App.js
import React from 'react';
import { Container, Box } from '@mui/material';
import background from './assets/images/background.png';
import Navbar from './components/Navbar';
import Timer from './components/Timer';

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Navbar/>
        <Timer/>
      </Container>
    </Box>
  );
}

export default App;
