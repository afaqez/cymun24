import React from "react";
import { Typography, Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 4,
        mt: { xs: 2, md: 3, lg: 5 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "1.8rem", // adjust if needed
            md: "3rem",
            lg: "2rem",
          },
          fontWeight: "600",
          color: "#ffffff",
        }}
      >
        Capital University Islamabad's Official MUN is finally here!
      </Typography>
    </Box>
  );
};

export default HeroSection;
