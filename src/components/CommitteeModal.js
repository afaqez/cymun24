import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const CommitteeModal = ({ open, handleClose, committee }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="committee-modal-title"
      aria-describedby="committee-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '75%', sm: '80%', md: '60%' }, // Responsive width with padding
          bgcolor: 'rgba(0, 0, 0, 0.9)', // Dark background color for modal
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          color: '#ffffff', // Ensure text is white to match theme
        }}
      >
        <Typography id="committee-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          {committee.name}
        </Typography>
        <Typography id="committee-modal-description" sx={{ mt: 2 }}>
          {committee.description}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CommitteeModal;
