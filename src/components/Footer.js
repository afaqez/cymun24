import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        py: 2,
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} CYMUN. All rights reserved. Powered by{" "}
        <Link
          href="https://www.instagram.com/afaqcodes"
          color="red"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: "bold", // Make the link text bold
            transition: "color 0.3s", // Smooth color transition
            "&:hover": {
              color: "primary.main", // Change color on hover
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
