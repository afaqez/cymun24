import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";

const timeCalculation = () => {
  const countdownDuration = 33604 * 60 * 1000;
  const startTime = new Date("2024-08-28T15:56:00Z"); // Start time in UTC

  // const countdownDuration = 1 * 60 * 1000; // 1 minute in milliseconds
  // const startTime = new Date("2024-09-07T10:11:00Z"); // Start time in UTC (3:11 PM PKT)

  const currentTime = new Date();
  const elapsedTime = currentTime - startTime;
  const remainingTime = Math.max(countdownDuration - elapsedTime, 0);

  if (remainingTime <= 0) return false;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const Timer = ({ onTimerEnd }) => {
  const [countdown, setCountdown] = useState(() => timeCalculation() || []);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const updateCountdown = setInterval(() => {
      const newCountdown = timeCalculation();
      if (newCountdown === false) {
        setTimerEnded(true);
        clearInterval(updateCountdown);
        onTimerEnd(true); // Notify the parent component that the timer has ended
      } else {
        setCountdown(newCountdown);
      }
    }, 1000);

    return () => {
      clearInterval(updateCountdown);
    };
  }, [onTimerEnd]);

  const timerLabels = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: 2, md: 3, lg: 5 },
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {timerEnded ? (
        <Typography
          variant="h4"
          sx={{
            color: "white",
            animation: "fade-in 1s ease-in",
          }}
        >
          Registrations Open!
        </Typography>
      ) : countdown.length === 0 ? (
        <Typography
          variant="h4"
          sx={{
            color: "white",
            animation: "fade-in 1s ease-in",
          }}
        >
          Registrations Open!
        </Typography>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            maxWidth: "100%",
            px: { xs: 1, md: 2 },
          }}
        >
          {countdown.map((count, index) => (
            <Grid
              item
              key={index}
              xs={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "80%", md: "100%" },
                  height: { xs: 100, md: 140, lg: 180 },
                  borderRadius: "12px",
                  boxShadow: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  textAlign: "center",
                  animation: "slide-up 1s ease-in",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      animation: "count 1s ease-in",
                    }}
                  >
                    {count < 10 ? `0${count}` : count}
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "white",
                    mt: 1,
                    textTransform: "capitalize",
                  }}
                >
                  {timerLabels[index]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Timer;
