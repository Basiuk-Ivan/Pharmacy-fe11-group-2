import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Tab, Tabs, Typography, Box, Button } from '@mui/material';
import { theme } from '../../tools/muiTheme';
import { closeModal } from '../../redux/slice/modalSlice';
import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegistrationForm';
import { styles } from './style';
import { setToken } from '../../redux/slice/isToken';

import './style/Auth.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const AuthButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const isOpen = useSelector(state => state.modalSlice.openModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(closeModal());

  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFormLogin = async values => {
    try {
      // const url = `http://localhost:3004/api/users/login?email=${values.email}&password=${values.password}`;
      const url = `${process.env.VITE_API_URL}/api/users/login?email=${values.email}&password=${values.password}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { token, user } = await response.json();

      window.localStorage.setItem('token', token);
      dispatch(setToken(token));
      window.location.reload();
    } catch (err) {
      console.error('Error fetching products:', err);
    }
    handleCloseModal();
  };

  const handleFormSubmit = async values => {
    console.log(values);
    try {
      // const url = 'http://localhost:3004/api/users/';
      const url = `${process.env.VITE_API_URL}/api/users/`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        setOpen(true);
        throw new Error('Network response was not ok');
      }
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
    handleCloseModal();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        {!!open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Упс...
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Щось пішло не так
              </Typography>
            </Box>
          </Modal>
        )}
        <Modal
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles}>
            <div className="auth-modal">
              <div className="auth-modal__container">
                <Tabs color="success" value={activeTab} onChange={handleTabChange}>
                  <Tab label="Вхід" value="login" />
                  <Tab color="success" label="Реєстрація" value="registration" />
                </Tabs>
                <Typography id="modal-modal-title" variant="h6" component="p">
                  Залиште ваші дані, і ми зв'яжемося з вами. Ми не займаємося розсилкою рекламних повідомлень,
                  а також не передаємо контактні дані третім особам
                </Typography>
                <LoginForm activeTab={activeTab} handleFormSubmit={handleFormLogin} />
                <RegistrationForm activeTab={activeTab} handleFormSubmit={handleFormSubmit} />
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};
export default AuthButton;
