import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { Box, Typography,Stack } from '@mui/material';
import {FetchFromApi} from "../utils/FetchFromApi";
import { CheckCircle } from '@mui/icons-material';
import {Videos} from './';
const VideoDetail = () => {
   const [videoDetail,setVideoDetail] = useState([]);
 
const [videos, setVideos]= useState([]);
  const {id} = useParams();
  useEffect(() => {
    FetchFromApi(`videos?part=contentDetails,snippet,statistics&id=${id}`)
   .then(data=>{
    setVideoDetail(data?.items[0]);
   });
   FetchFromApi(`search?part=snippet&relatedToVideoI=${id}&type=video`)
   .then((video)=>{
    setVideos(video.items)
   })
  }, [id])

  const{snippet,statistics} = videoDetail;
  
  return (
   <Box minHeight = "95vh">
     <Stack 
     sx = {{
      xs:'column',
      md:'row'
     }}
     >
    <Box flex={1}>
    <Box
    sx={{
      width:"100%",
      postion:'sticky',
      top:'86px'
    }}
    >
    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
    <Typography variant="h5" color="#fff" fontWeight="bold" padding={2}>

      {snippet?.title}
    </Typography>
    <Stack
    justifyContent="space-between"
    direction= "row"
    py={1}
    px={2}
    sx={{
      color:'#fff'

    }}
    >
      <Link to={`channel/${snippet?.channelId}`}>
        <Typography variant={{sm:'subtitle1',md:'h6'}} color='white' >
          {snippet?.channelTitle}
          <CheckCircle 
          sx={{
            color:"grey",
            fontSize:'12px',
            ml:'5px'

          }}
          />
        </Typography>
      </Link>
      <Stack direction='row' gap= {20} alignItems ="center">
        <Typography variant="body1"  >
        {statistics?.viewCount} views
        </Typography>
        <Typography variant="body1" >
        {statistics?.likeCount} likes
        </Typography>

      </Stack>
    
    </Stack>
    </Box>
    </Box>
    
     </Stack>
     <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems='center'>
     <Videos videos={videos}  direction="column"/>
    </Box>

   </Box>
  );
}

export default VideoDetail
