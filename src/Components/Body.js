import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardMedia, } from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
export default function Types() {

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: 0,
      marginLeft: 1,
      marginRight: 1,
      width: '100%',
      mx: 'auto',
      position: 'relative',
      backgroundColor: '#f0f0f0', // Light gray background color
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ display: 'flex', gap: 36, marginTop:8,   font: 'inherit' }}>
        <Box sx={{ width: '90%', maxWidth: 580 }}><br/>
          <Typography variant="h4" gutterBottom>
            SHE Nations: a community <br /> of faith-driven women <br /> committed to living <br /> purpose-filled lives.
          </Typography>
          <Typography variant="body2" gutterBottom>
          She Nations is committed to empowering women of all ages by providing biblical <br/>teachings, spiritual guidance, and a supportive community.
           </Typography> <br/>
          <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
        <Box sx={{ display: 'flex', gap: 2 }}> {/* Flex container with gap for spacing */}
        <Button
        variant="contained"
        href="#contained-buttons"
        sx={{ 
          backgroundColor: '#600399', 
          color: 'white', 
          borderRadius: '30px',
          textTransform: 'none', // Prevent uppercase transformation
          '&:hover': { 
            backgroundColor: '#4e027a'
          } 
        }}
      >
        Join SHE Nations Community
      </Button>

                <Button
                  variant="outlined"
                  href="#contained-buttons"
                  sx={{ 
                    borderColor: 'black',  // Set the outline (border) color to black
                    color: 'black',        // Set the text color to black
                    borderRadius: '30px',
                    textTransform: 'none', // Prevent uppercase transformation
                    '&:hover': { 
                      backgroundColor: '#f0f0f0' // Light gray color for hover background
                    } 
                  }}
                >
                  See Testimonials
                </Button>
              </Box>
              </Typography>

            <Box display={"flex"} alignItems={"center"} marginTop={4}>
            <Box>
            <Box display={"flex"} alignItems={"center"}>
                        {[
                          "https://i.pravatar.cc/300?img=1",
                          "https://i.pravatar.cc/300?img=2",
                          "https://i.pravatar.cc/300?img=3",
                          "https://i.pravatar.cc/300?img=4",
                            "https://i.pravatar.cc/300?img=5",   
                                "https://i.pravatar.cc/300?img=6",
                        ].map((src, index) => (
                          <Avatar
                            key={index}
                            src={src}
                            sx={{
                              width: 32,
                              height: 32,
                              display: "inline-block",
                              border: "2px solid white",
                              "&:not(:first-of-type)": {
                                marginLeft: "-12px",
                              },
                            }}
                          />
                        ))}
                      
                      </Box>
                      </Box>
                            
                    <Box>
                    <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                              <Box display={"flex"}>
                              <Rating name={"rating"} value={5} size={"small"} />
                            </Box> 
                            <Typography 
                            variant={"body3"}
                            color={"textSecondary"}
                            sx={{ ml: 1}}
                          >
                            Enjoyment by 5,000+ women globally.
                          </Typography>
                              </Typography>
                    </Box>
                    </Box>
                            </Box>

        {/* Card with image */}
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="480"
        image="b1.png" // Replace with your image path
        alt="Descriptive text"
      />
    </Card> 
      </Box>
     
      <Card
      elevation={0}
      sx={{
        overflow: "initial",
        maxWidth: 304,
        backgroundColor: "transparent",
      }}
    >
      <CardMedia
      
        sx={{
          width: "100%",
          height: 111,
          paddingBottom: "56.25%",
          backgroundColor: "rgba(0 0 0 / 0.08)",
        }}
      />
      
    </Card>
    </Box>
  

  );
}
