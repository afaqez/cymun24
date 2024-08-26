import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import WHOIcon from "../assets/icons/who.svg";
import UNSCIcon from "../assets/icons/unsc.svg";

const committees = [
  {
    icon: WHOIcon,
    name: "World Health Organization (WHO)",
  },
  {
    icon: UNSCIcon,
    name: "United Nations Security Council (UNSC)",
  },
  {
    icon: WHOIcon,
    name: "World Health Organization (WHO)",
  },
  {
    icon: UNSCIcon,
    name: "United Nations Security Council (UNSC)",
  },
  {
    icon: WHOIcon,
    name: "World Health Organization (WHO)",
  },
  {
    icon: UNSCIcon,
    name: "United Nations Security Council (UNSC)",
  },
  // Add more committees as needed...
];

const Committees = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 4,
        mt: 20,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, // 2 columns on mobile, 3 on larger screens
          gap: 2,
          maxWidth: 1200, // Optional: Limit the maximum width of the grid for large screens
        }}
      >
        {committees.map((committee, index) => (
          <Paper
            key={index}
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Slightly transparent white
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Box
              component="img"
              src={committee.icon}
              sx={{
                height: 120,
                width: 120,
                mb: 2,
              }}
            />
            <Typography variant="body2" sx={{ color: "#ffffff" }}>
              {committee.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Committees;
