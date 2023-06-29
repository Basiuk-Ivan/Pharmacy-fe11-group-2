import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4
};
const ForgotPasswordModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="forgot-password-modal-title"
      aria-describedby="forgot-password-modal-description"
    >
      <Box sx={styles}>
        <Typography id="forgot-password-modal-title" variant="h6" component="h2">
          Забули пароль
        </Typography>
        <Typography id="forgot-password-modal-description" sx={{ mt: 2 }}>
          Введіть ваш email и ми відправимо вам інструкціЇ з відновлення паролю.
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          // Добавьте необходимую логику для обработки введенного email
        />
        <Button variant="contained" color="primary" fullWidth>
          Відновити пароль
        </Button>
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;
