import React from "react";
import { Box, Container } from "@mui/material";
import background from "./assets/images/background.png";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import HeroSection from "./components/HeroSection";
import RegisterButton from "./components/RegisterButton";
import Stats from "./components/Stats";
import PresidentsMessage from "./components/PresidentMessage";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden", // Prevents scrollbars from appearing if background image is larger
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Ensures the background image is fixed
        backgroundRepeat: "no-repeat", // Prevents background from repeating
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Navbar />
        <HeroSection />
        <Timer />
        <RegisterButton />
        <Stats />
        <PresidentsMessage />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
