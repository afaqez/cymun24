import { Box, Typography } from "@mui/material";

const Aftermath = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#282c34",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontFamily: "Montserrat, sans-serif",
          animation: "fade-in 2s ease-in",
        }}
      >
        Registrations Open!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "white",
          fontFamily: "Montserrat, sans-serif",
          mt: 2,
          animation: "fade-in 3s ease-in",
        }}
      >
        Thank you for waiting.
      </Typography>
    </Box>
  );
};

export default Aftermath;
