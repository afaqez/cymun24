import React, { useState } from "react";
import { Box, Typography, Paper, ButtonBase } from "@mui/material";
import DirectorGeneral from "../assets/images/DirectorGeneral.jpg";
import UnderDirectorGeneral from "../assets/images/UnderDirectorGeneral.jpg";
import PresidentialAdvisor from "../assets/images/PresidentialAdvisor.jpg";
import D2DOM from "../assets/images/D2DOM.jpg";
import SecretaryGeneral from "../assets/images/SecretaryGeneral.jpg";

const councilMembers = [
  {
    image: SecretaryGeneral,
    name: "Secretary General",
  },
  {
    image: DirectorGeneral,
    name: "Director General",
  },
  {
    image: PresidentialAdvisor,
    name: "Presidential Advisor",
  },
  {
    image: UnderDirectorGeneral,
    name: "Under Director General",
  },
  {
    image: D2DOM,
    name: "D2DOM",
  },
];

const ExecutiveCouncil = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
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
          mb: 4,
          fontWeight: "bold",
        }}
      >
        EXECUTIVE COUNCIL
      </Typography>

      {/* Council Members Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          maxWidth: 1200,
        }}
      >
        {councilMembers.map((member, index) => (
          <ButtonBase
            key={index}
            onClick={() => handleOpenModal(member)}
            sx={{
              width: { xs: "calc(50% - 8px)", md: "calc(33.33% - 16px)" },
              mb: 2,
            }}
          >
            <Paper
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
                width: "100%",
              }}
            >
              <Box
                component="img"
                src={member.image}
                sx={{
                  height: 120,
                  width: 120,
                  mb: 2,
                }}
              />
              <Typography variant="body2" sx={{ color: "#ffffff" }}>
                {member.name}
              </Typography>
            </Paper>
          </ButtonBase>
        ))}
      </Box>

      {/* Optional: Council Member Modal */}
    </Box>
  );
};

export default ExecutiveCouncil;
