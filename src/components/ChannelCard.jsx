import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { ChannelDetail } from "./ChannelDetail";
import { demoProfilePicture } from "../utils/constants";

const channelCard = ({ ChannelDetail }) => {
  return (
    <Box
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
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
              ChannelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={ChannelDetail?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography variant="h6">
            {ChannelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 14,
                color: "grey",
                ml: "5px",
              }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default channelCard;
