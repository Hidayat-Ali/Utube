import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { ChannelDetail } from "./ChannelDetail";
import { demoProfilePicture } from "../utils/constants";

const channelCard = ({ channelDetail,marginTop , marginLeft }) => {
  return (
    <Box
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "0",
        dispaly:'flex',
        justifyContent:'center',
        alignItems:'center',
        width : {xs:'356px',md:'320px'},
        margin:'auto',
        height:'326px',
        marginTop:marginTop,
        marginLeft:marginLeft
        

        
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 14,
                color: "grey",
                ml: "5px",
              }}
            />
          </Typography>

        
            {channelDetail?.statistics?.subscriberCount &&(

           <Typography 
    
           >
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
           </Typography>
            )}
     
        </CardContent>
      </Link>
    </Box>
  );
};

export default channelCard;
