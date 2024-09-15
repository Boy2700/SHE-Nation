import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
   
<Box sx={{ display: 'flex', flexDirection: 'row', margin: 'auto',marginTop:5, justifyContent:'center' }}>
   
   <Box sx={{marginLeft:2,marginRight:2}}  >
   <Card sx={{ maxWidth: 450,borderRadius:3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="b21.png"
          alt=" image"
        />
        <CardContent>
          <Typography variant="h6" sx={{ color: 'black' }}>
            Join the  Education: FWE Fellowship Info Session
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Wed, Aug 24 • 6:00 PM GMT+1 • KADA Hive(Innovation & Tech Hub)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
  <Button 
    size="small" 
    color="primary" 
    sx={{ textTransform: 'none',  color:'#600399',   fontWeight: 'bold' }} 
  >
    Free
  </Button>
</CardActions>

    </Card>
    
    </Box> 
    <Box sx={{marginLeft:2,marginRight:2}}  >
   <Card sx={{ maxWidth: 450,borderRadius:3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="b1.png"
          alt=" image"
        />
       <CardContent>
        
        <Typography variant="h6" sx={{ color: 'black' }}>
        When Women Pray... <br/> God Answers
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Wed, Aug 24 • 6:00 PM GMT+1 • KADA Hive(Innovation & Tech Hub)
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Button 
    size="small" 
    color="primary" 
    sx={{ textTransform: 'none',  color:'#600399',   fontWeight: 'bold' }} 
  >
  Free
</Button>
</CardActions>
    </Card>
    </Box> 
    <Box sx={{marginLeft:2,marginRight:2}}  >
   <Card sx={{ maxWidth: 450,borderRadius:3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="b21.png"
          alt=" image"
        />
        <CardContent>   
        <Typography variant="h6" sx={{ color: 'black' }}>
        Activate Your Inner Strength: SheIGNITES Women's Conference - WhatcomTalk
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Wed, Aug 24 • 6:00 PM GMT+1 • KADA Hive(Innovation & Tech Hub)
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Button 
    size="small" 
    color="primary" 
    sx={{ textTransform: 'none',  color:'#600399',   fontWeight: 'bold' }} 
  >
  N12,000
</Button>
</CardActions>
    </Card>
    
    </Box> 
   
    </Box>
  );
}
