import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '92%',
        marginX: 'auto',
        py: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            mb: 4,
            animation: 'fade-in 1s ease-in-out',
          }}
          className="glow"
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Spartan, sans-serif',
              fontSize: {
                xs: '2.5rem', // text-5xl
                md: '3.75rem', // text-6xl
                lg: '5rem', // text-8xl
              },
              color: '#ffffff',
            }}
          >
            CY'MUN'
            <Box
              component="span"
              sx={{
                color: '#fe0a0a',
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
