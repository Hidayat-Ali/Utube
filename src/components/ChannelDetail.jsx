import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChannelCard } from '.';
import { FetchFromApi } from '../utils/FetchFromApi';
import {Videos} from './';
const ChannelDetail = () => {
  const [channelDetails ,setChannelDetails] = useState([]);
  const [channelVideos , setChannelVideos] = useState([]);
  const {id} = useParams();

  useEffect(() => {

  FetchFromApi(`channels?part=snippet&id=${id}`)
  .then((data)=>{
    setChannelDetails(data?.items[0]);

    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{
      setChannelVideos(data?.items)
    });
 
    
  });
  }, [id])
 
  return (
    <Box>
     <div
      style={{
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        zIndex:10,
        height:'300px'    
      }}
     
     
     />

     <ChannelCard  channelDetail={channelDetails} 
      marginTop= '-113px'
    
     
     />

     <Box display='flex' p={2}>
     <Box 
     sx={{
      mr:{sm:'108px'}
     }}

    />
    <Videos videos={channelVideos}/>
       
  
 
     </Box>

   
    </Box>
  )
}

export default ChannelDetail
