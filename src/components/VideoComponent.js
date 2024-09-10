// src/components/VideoComponent.js
import React from "react";
import { Box } from "@mui/material";

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
      <iframe
        src="https://giphy.com/embed/obBRY85qHrHIOX7TsF"
        // src="https://giphy.com/embed/lTLV2erK8vf1MIz4Rk"
        width="500"
        height="500"
        playsInline
        style={{ borderRadius: "8px" }} // Optional styling
        frameBorder="0"
        allowFullScreen
        title="Giphy"
      ></iframe>
    </Box>
  );
};

export default VideoComponent;
