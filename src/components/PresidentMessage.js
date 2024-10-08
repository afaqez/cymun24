import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import presidentImage from "../assets/images/moiz2.jpg";

const PresidentsMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        px: 4,
        mt: 25,
      }}
    >
      <a
        href="https://www.instagram.com/a.b_moiz/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }} // Remove underline for the link
      >
        <Paper
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            p: 4,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
            position: "relative",
            boxShadow: 3,
          }}
        >
          <Avatar
            src={presidentImage}
            alt="President"
            sx={{
              height: { xs: 160, sm: 120 },
              width: { xs: 160, sm: 120 },
              mb: 2,
              borderRadius: "50%",
              mx: "auto",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#e0e0e0", mb: 2 }}
          >
            President's Message
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff", mb: 2, textAlign: "justify" }}
          >
            Greetings, <br />
            <br />
            I, Abdul Moiz Kamran, President of CY'MUN'24, extend a warm
            invitation to you for our inaugural event. This conference promises
            to be a landmark experience, etching its name in the annals of MUN
            history. <br /> We are confident that CY'MUN will be the most
            eagerly awaited MUN conference in the country. Having you join us
            would be a tremendous honor. We eagerly anticipate your
            participation. <br />
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "#ffffff", fontWeight: "bold" }}
            >
              Abdul Moiz Kamran
            </Typography>
            <Typography variant="body1" sx={{ color: "#ffffff" }}>
              President CY'MUN'24
            </Typography>
          </Box>
        </Paper>
      </a>
    </Box>
  );
};

export default PresidentsMessage;
