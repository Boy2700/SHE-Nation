import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material'; // Import Box from MUI
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import SubBodyone from  './Components/SubBodyone';
import SubBar from './Components/SubBar';
import SubBodyTwo from './Components/SubBodytwo';
import SubBar2 from './Components/SubBar2';
import SubBodythree from './Components/SubBodythree'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box>
        <Body />
      </Box>
      <Box
      sx={{
        backgroundImage: `url('/b11.jpg')`,  // Replace with the actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh', // Adjust height as needed
      }}
    >
      <SubBodyone />
    </Box>
    <Box>
      <SubBar/>
    </Box>
      <Box>
        <SubBodyTwo />
      </Box>
      <Box>
      <SubBar2/>
    </Box>
    <Box>
      <SubBodythree/>
    </Box>
    </Router>
  );
};

export default App;
