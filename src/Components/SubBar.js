import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';




export default function MyComponent() {
  return (

    <Box sx={{ display: 'flex',justifyContent: 'space-between', flexDirection: 'row',marginTop:5 }}>
       <Box sx={{ marginLeft: 5, }}>
        <Typography variant="h4" component="h2" sx={{font:'Libre-Baskerville'}}>
      Featured Events
    </Typography>

        </Box>


        <Box sx={{ marginRight: 3, }}>

      <Button variant="contained"   sx={{ backgroundColor: '#EAECF0', height: 25, marginRight: 2, color: 'black' }} 
        href="#contained-buttons"
        endIcon={<EastIcon />}  
      >
        See all events
      </Button>
    </Box>
    </Box>
  );
}
