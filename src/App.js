import React, { useState } from "react";
import { Box, Container, ThemeProvider } from "@mui/material";
import background from "./assets/images/background.png";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import HeroSection from "./components/HeroSection";
import RegisterButton from "./components/RegisterButton";
import Stats from "./components/Stats";
import PresidentsMessage from "./components/PresidentMessage";
import Footer from "./components/Footer";
import Committees from "./components/Committees";
import theme from "./constants/theme";
import VideoComponent from "./components/VideoComponent";

function App() {
  const [timerEnded, setTimerEnded] = useState(false);

  const handleTimerEnd = () => {
    setTimerEnded(true);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Navbar />
        <HeroSection />
        <Timer onTimerEnd={handleTimerEnd} />
        {!timerEnded && <VideoComponent />}
        {timerEnded && <RegisterButton />}
        <Stats />
        <PresidentsMessage />
        <Committees />
        <Footer />
      </Container>
    </Box>
    </ThemeProvider>
  );
}

export default App;
