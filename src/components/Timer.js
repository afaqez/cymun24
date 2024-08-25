import { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { timeCalculation } from "../utils/timeCalculation";

const Timer = () => {
  const [countdown, setCountdown] = useState(() => timeCalculation() || []);

  useEffect(() => {
    const updateCountdown = setInterval(() => {
      const newCountdown = timeCalculation() || [];
      setCountdown(newCountdown);
    }, 1000);

    return () => {
      clearInterval(updateCountdown);
    };
  }, []);

  const timerLabels = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: { xs: 2, md: 3, lg: 5 },
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      {countdown.length === 0 ? (
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            animation: 'fade-in 1s ease-in',
          }}
        >
          That is all folks!
        </Typography>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'center',
            maxWidth: '100%',
            px: { xs: 1, md: 2 },
          }}
        >
          {countdown.map((count, index) => (
            <Grid
              item
              key={index}
              xs={6} // 2 items per row on mobile
              md={3} // 4 items per row on larger screens
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: { xs: 100, md: 140, lg: 180 },
                  borderRadius: '12px',
                  boxShadow: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  backdropBrightness: '0.9',
                  textAlign: 'center',
                  animation: 'slide-up 1s ease-in',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      animation: 'count 1s ease-in',
                    }}
                  >
                    {count < 10 ? `0${count}` : count}
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'white',
                    mt: 1,
                    textTransform: 'capitalize',
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
