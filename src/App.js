// src/App.js
import React from "react";
import { Container, Box } from "@mui/material";
import background from "./assets/images/background.png";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden", // Prevents scrollbars from appearing if background image is larger
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Navbar />
        <HeroSection />
        <Timer />
      </Container>
    </Box>
  );
}

export default App;
