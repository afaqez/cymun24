import React, { useState } from "react";
import { Box, Typography, Paper, ButtonBase } from "@mui/material";
import WHOIcon from "../assets/icons/who.svg";
import UNSCIcon from "../assets/icons/unsc.svg";
import UNWIcon from "../assets/icons/unw.svg";
import UNHRCIcon from "../assets/icons/unhrc.svg";
import PNAIcon from "../assets/icons/pna.svg";
import ICCIcon from "../assets/icons/icc.svg";
import CommitteeModal from "./CommitteeModal"; // Import the modal component

const committees = [
  {
    icon: WHOIcon,
    name: "World Health Organization (WHO)",
    description: "WHO is a specialized agency of the United Nations responsible for international public health.",
  },
  {
    icon: UNSCIcon,
    name: "United Nations Security Council (UNSC)",
    description: "UNSC is responsible for maintaining international peace and security.",
  },
  {
    icon: UNWIcon,
    name: "United Nations Women (UNW)",
    description: "UN Women is the United Nations entity dedicated to gender equality and the empowerment of women.",
  },
  {
    icon: UNHRCIcon,
    name: "United Nations Human Rights Council (UNHRC)",
    description: "UNHRC is an inter-governmental body responsible for promoting and protecting human rights around the world.",
  },
  {
    icon: PNAIcon,
    name: "Pakistan National Assembly (PNA)",
    description: "PNA is the lower house of the bicameral Majlis-e-Shura, which also comprises the Senate of Pakistan.",
  },
  {
    icon: ICCIcon,
    name: "International Crises Cell (ICC)",
    description: "ICC is an international body responsible for crisis management and response.",
  },
];

const Committees = () => {
  const [selectedCommittee, setSelectedCommittee] = useState(null);

  const handleOpenModal = (committee) => {
    setSelectedCommittee(committee);
  };

  const handleCloseModal = () => {
    setSelectedCommittee(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        mt: 20,
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          color: "#ffffff",
          mb: 4, // Margin bottom for spacing between the title and the grid
          fontWeight: "bold",
        }}
      >
        COMMITTEES
      </Typography>

      {/* Committees Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, // 2 columns on mobile, 3 on larger screens
          gap: 2,
          maxWidth: 1200, // Optional: Limit the maximum width of the grid for large screens
        }}
      >
        {committees.map((committee, index) => (
          <ButtonBase
            key={index}
            onClick={() => handleOpenModal(committee)}
            sx={{
              width: "100%", // Make the button base fill the Paper element
            }}
          >
            <Paper
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Slightly transparent white
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer", // Pointer cursor to indicate it's clickable
                width: "100%", // Ensure the paper fills the button base
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
          </ButtonBase>
        ))}
      </Box>

      {/* Committee Modal */}
      {selectedCommittee && (
        <CommitteeModal
          open={Boolean(selectedCommittee)}
          handleClose={handleCloseModal}
          committee={selectedCommittee}
        />
      )}
    </Box>
  );
};

export default Committees;
