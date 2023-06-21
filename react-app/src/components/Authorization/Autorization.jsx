import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Tab, Tabs, Typography, Box } from '@mui/material';

// import jwt_decode from 'jwt-decode';
import { theme } from '../../tools/muiTheme';
import { closeModal } from '../../redux/slice/modalSlice';
import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegistrationForm';
// eslint-disable-next-line import/no-unresolved
import { styles } from './style';
import { setToken } from '../../redux/slice/isToken';
// eslint-disable-next-line import/no-unresolved
import './style/Auth.scss';

const AuthButton = () => {
  const isOpen = useSelector(state => state.modalSlice.openModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(closeModal());

  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFormLogin = async values => {
    try {
      const url = `http://localhost:3004/api/users/login?email=${values.email}&password=${values.password}`;
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
      const { token } = await response.json();

      window.localStorage.setItem('token', token);
      dispatch(setToken(token));
    } catch (err) {
      console.error('Error fetching products:', err);
    }
    handleCloseModal();
  };
  const handleFormSubmit = async values => {
    console.log(values);
    try {
      const url = 'http://localhost:3004/api/users/';
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
      const user = await response.json();
      console.log('user:', user);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
    handleCloseModal();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
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
