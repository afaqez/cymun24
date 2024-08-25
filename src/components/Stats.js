import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import CommitteeSessionIcon from "../assets/icons/committeeSession.svg";
import UNcommittees from "../assets/icons/unCommittees.svg";
import Delegates from "../assets/icons/delegates.svg";
import SocialEvents from "../assets/icons/socialEvents.svg";

const stats = [
  {
    icon: CommitteeSessionIcon,
    title: "Committee Sessions",
    count: "10",
  },
  {
    icon: UNcommittees,
    title: "UN Committees",
    count: "8",
  },
  {
    icon: Delegates,
    title: "Delegates and Team Members",
    count: "300+",
  },
  {
    icon: SocialEvents,
    title: "Social Events",
    count: "3",
  },
];

const Stats = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }, // 2 columns on mobile, 4 on larger screens
        gap: 2,
        padding: 4,
        mt: 20,
      }}
    >
      {stats.map((stat, index) => (
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
            src={stat.icon}
            sx={{
              height: 60,
              width: 60,
              mb: 2,
            }}
          />
          <Typography variant="body2" sx={{ color: "#ffffff", mb: 1 }}>
            {stat.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#ffffff" }}>
            {stat.count}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Stats;
