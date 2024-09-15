import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ArticleIcon from '@mui/icons-material/Article';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

export default function ActionAreaCard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', marginRight: 25, marginTop: 2, margin:'auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft:5,marginRight:2 }}>
        <Card sx={{ maxWidth: 500, marginBottom: 5, border: 0, borderColor: 'gray' }}>
          <CardContent> 
          <Box sx={{ display: 'flex',color:'#600399', justifyContent: 'center', marginBottom: 2 }}>
              <VideoLibraryIcon fontSize="large" />
            </Box>
            <Typography gutterBottom variant="h6" component="div"sx={{textAlign:'center'}}>
              All video
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary',textAlign:'center' }}>
              She Nations is committed to empowering women of all ages by providing biblical teachings, spiritual guidance, and a supportive community. Through our programs and initiatives, we seek to inspire women to grow in their faith, embrace their unique callings, and uplift others by living out the principles of God’s Word in their daily lives.
            </Typography>
          </CardContent>

          <Box sx={{ display: 'flex', justifyContent: 'center',  alignItems: 'center',  }}>
      <Button sx={{ backgroundColor: 'transparent',fontSize:10,    textTransform: 'none',   color: '#600399', border: 'none',  '&:hover': {
            backgroundColor: 'rgba(96, 3, 153, 0.1)', 
          },
        }}  endIcon={<EastIcon />} 
      >
        Start Viewing
      </Button>
    </Box>

        </Card>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft:5,marginRight:2 }}>
        <Card sx={{ maxWidth: 500, marginBottom: 5, border: 0, borderColor: 'gray' }}>
          <CardContent> 
          <Box sx={{ display: 'flex',color:'#600399', justifyContent: 'center', marginBottom: 2 }}>
              <PodcastsIcon fontSize="large" />
            </Box>
            <Typography gutterBottom variant="h6" component="div"sx={{textAlign:'center'}}>
              Podcast
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary',textAlign:'center' }}>
              She Nations is committed to empowering women of all ages by providing biblical teachings, spiritual guidance, and a supportive community. Through our programs and initiatives, we seek to inspire women to grow in their faith, embrace their unique callings, and uplift others by living out the principles of God’s Word in their daily lives.
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center',  alignItems: 'center',  }}>
      <Button sx={{ backgroundColor: 'transparent',fontSize:10,    textTransform: 'none',   color: '#600399', border: 'none',  '&:hover': {
            backgroundColor: 'rgba(96, 3, 153, 0.1)', 
          },
        }}  endIcon={<EastIcon />} 
      >
        Start Listening
      </Button>
    </Box>

        </Card>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft:5,marginRight:2 }}>
        <Card sx={{ maxWidth: 500, marginBottom: 5, border: 0, borderColor: 'gray' }}>
          <CardContent> 
          <Box sx={{ display: 'flex',color:'#600399', justifyContent: 'center', marginBottom: 2 }}>
              <ArticleIcon fontSize="large" />
            </Box>
            <Typography gutterBottom variant="h6" component="div"sx={{textAlign:'center'}}>
              Article
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary',textAlign:'center' }}>
              She Nations is committed to empowering women of all ages by providing biblical teachings, spiritual guidance, and a supportive community. Through our programs and initiatives, we seek to inspire women to grow in their faith, embrace their unique callings, and uplift others by living out the principles of God’s Word in their daily lives.
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center',  alignItems: 'center',  }}>
      <Button sx={{ backgroundColor: 'transparent',fontSize:10,    textTransform: 'none',   color: '#600399', border: 'none',  '&:hover': {
            backgroundColor: 'rgba(96, 3, 153, 0.1)', 
          },
        }}  endIcon={<EastIcon />} 
      >
        Start Reading
      </Button>
    </Box>

        </Card>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft:5,marginRight:2 }}>
        <Card sx={{ maxWidth: 500, marginBottom: 5, border: 0, borderColor: 'gray' }}>
          <CardContent> 
          <Box sx={{ display: 'flex', color:'#600399', justifyContent: 'center', marginBottom: 2 }}>
              <NoteAltIcon fontSize="large" />
            </Box>
            <Typography gutterBottom variant="h6" component="div"sx={{textAlign:'center'}}>
              Blog Post
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary',textAlign:'center' }}>
              She Nations is committed to empowering women of all ages by providing biblical teachings, spiritual guidance, and a supportive community. Through our programs and initiatives, we seek to inspire women to grow in their faith, embrace their unique callings, and uplift others by living out the principles of God’s Word in their daily lives.
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center',  alignItems: 'center',  }}>
      <Button sx={{ backgroundColor: 'transparent',fontSize:10,    textTransform: 'none',   color: '#600399', border: 'none',  '&:hover': {
            backgroundColor: 'rgba(96, 3, 153, 0.1)', 
          },
        }}  endIcon={<EastIcon />} 
      >
        Start Reading
      </Button>
    </Box>

        </Card>
      </Box>


      
      
    </Box>
  );
}
