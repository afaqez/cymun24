import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../assets/icons/logo.svg"; // Import your SVG logo

const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between", // Adjust the logo and text
        alignItems: "center",
        width: "92%",
        marginX: "auto",
        py: 4,
      }}
    >
      {/* Text Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "row",
          gap: 1,
        }}
      >
        <Logo style={{ width: "100px", height: "auto" }} />{" "}
        <Box
          sx={{
            mb: 4,
            color: "#112269",
            textAlign: "center",
            animation: "glow 2s ease-in-out infinite alternate",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mt: 4,
              fontFamily: "Spartan, sans-serif",
              fontSize: {
                xs: "2.5rem", // text-5xl
                md: "3.75rem", // text-6xl
                lg: "5rem", // text-8xl
              },
              color: "#ffffff",
            }}
          >
            CY'MUN'
            <Box
              component="span"
              sx={{
                color: "#fe0a0a",
              }}
            >
              24
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
