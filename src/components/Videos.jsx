import React from 'react'
import {VideoCard,ChannelCard} from './';
import {Stack,Box} from '@mui/material';


const Videos = ({videos,direction}) => {
    // console.log(videos);
  return (
    <Stack
    direction={direction||'row'}
    flexWrap="wrap"
    justifyContent="start"
    gap = {2}
    >

{videos.map((item,idx)=>(
  <Box key={idx} >
{item.id.videoId && <VideoCard video = {item} />}
{item.snippet.channelId && <ChannelCard channelDetail= {item} marginLeft='0px'/>}
  </Box>
))}

    </Stack>
  )
}

export default Videos
