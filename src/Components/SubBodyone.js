import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { Skeleton } from '@mui/material';
export default function ActionAreaCard() {
  return (
   
  
    <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 25, alignItems:'flex-end',marginTop:5 }}>
    
    
    <Box sx={{ display: 'flex', flexDirection: 'row',marginTop:5 }}>
    <Box sx={{justifyContent:'left',marginRight:30}}>
    <div sx={{ maxWidth: 500, marginBottom: 5, border: 1, borderColor:'gray' }}>
      
      <Typography variant="h4" component="h2" gutterBottom>
      What you need to know <br/>about the SHE Nations <br/>Community
      </Typography>
        <Skeleton variant="text" sx={{ fontSize: '1',width:200, backgroundColor:'#600399' }} />
    
    </div>

    </Box>
   <Box>
   </Box>
    <Card sx={{ maxWidth: 500, marginBottom: 5, border: 1, borderColor:'gray' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mission Statement
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        She Nations is committed to empowering women of all ages by providing biblical teachings, spiritual guidance, and a supportive community. Through our programs and initiatives, we seek to inspire women to grow in their faith, embrace their unique callings, and uplift others by living out the principles of God’s Word in their daily lives.
        </Typography>
      </CardContent>
    </Card>
  </Box>







    <Card sx={{ maxWidth: 500, marginBottom: 5, border: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vision Statement
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        To create a global community of empowered women who are rooted in God’s Word, living out their faith with purpose and making a transformative impact in their homes, communities, and beyond.
        </Typography>
      </CardContent>
    </Card>
  
    <Card sx={{ maxWidth: 500, marginBottom: 5, border: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Core Values
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  <ol>
    <li>Faith: Anchoring our lives and teachings in the truth of Scripture.</li>
    <li>Empowerment: Equipping women to live with purpose and confidence.</li>
    <li>Community: Fostering a supportive and nurturing environment for spiritual growth.</li>
    <li>Integrity: Upholding Christian values in all our endeavors.</li>
    <li>Service: Encouraging women to serve others as an expression of their faith.</li>
  </ol>
</Typography>

      </CardContent>
    </Card>
  </Box>
  
  );
}