import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { ReactComponent as InstaLogo } from "../assets/icons/instaLogo.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed", // Fix the footer at the bottom of the viewport
        left: 0,
        bottom: 0,
        width: "100%", // Full width of the page
        color: "white",
        textAlign: "center",
        py: 4,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensure it's above other content
      }}
    >
      {/* Instagram Logo in the Center */}
      <Link
        href="https://www.instagram.com/cymun24"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2, // Adds space between logo and text
        }}
      >
        <InstaLogo style={{ width: "50px", height: "50px", fill: "white" }} />
      </Link>

      {/* Footer Text */}
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} CYMUN. All rights reserved. Powered by{" "}
        <Link
          href="https://www.instagram.com/afaqcodes"
          color="red"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: "bold",
            transition: "color 0.3s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          Kodevs
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default Footer;
