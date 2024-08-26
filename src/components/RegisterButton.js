import React from "react";
import { Button, Box } from "@mui/material";

const RegisterButton = () => {
  return (
    <Box
      sx={{
        mt: 25, // mt-20 in Tailwind, adjust to fit your layout
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        component="a"
        href="https://forms.gle/qCPBV3ouTxsu1zZ79"
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Security best practice when using target="_blank"
        sx={{
          backgroundColor: "#fe0a0a",
          color: "white",
          px: 4,
          py: 2,
          borderRadius: "15px", // rounded-full in Tailwind
          fontFamily: "Montserrat, sans-serif",
          fontSize: "1rem", // text-xl in Tailwind
          "&:hover": {
            backgroundColor: "#d00909",
          },
          animation: "bounce 1s infinite", // Add custom animation if needed
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        Register Now
      </Button>
    </Box>
  );
};

export default RegisterButton;
