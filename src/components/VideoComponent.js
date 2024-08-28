// src/components/VideoComponent.js
import React from 'react';
import { Box } from '@mui/material';
import videoSrc from '../assets/videos/video.mp4'; // Adjust path as needed

const VideoComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: 4, // Add margin as needed
      }}
    >
      <video
        width="80%" // Adjust width as needed
        controls
        autoPlay
        muted
        loop
        style={{ borderRadius: "8px" }} // Optional styling
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoComponent;
