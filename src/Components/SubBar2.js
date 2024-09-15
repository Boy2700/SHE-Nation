import React from "react";
import { Typography, Box } from "@mui/material";  // Combine the imports from "@mui/material"

export default function MyComponent() {
  return (
    <Box sx={{ marginLeft: 5, marginTop:5 }}>
      <Typography variant="h4" component="h2" sx={{ fontFamily: 'Libre-Baskerville' }}>
        Latest Contents
      </Typography>
    </Box>
  );
}
