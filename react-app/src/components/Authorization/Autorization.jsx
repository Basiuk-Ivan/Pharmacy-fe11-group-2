import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Tab, Tabs, Typography, Box, Button } from '@mui/material';
import jwtDecode from 'jwt-decode';
import { theme } from '../../tools/muiTheme';
import { closeModal, closeModalForgotPass } from '../../redux/slice/modalSlice';
import { LoginForm } from './components/LoginForm';
import { ForgotForm } from './components/ForgotForm';
import { RegistrationForm } from './components/RegistrationForm';
import { setUser } from '../../redux/slice/userSlice';
import { sendRequest } from '../../tools/Axios/sendRequest';
import ModalWindow from '../ModalWindow';
import {
  closeLoginModal,
  openLoginModal,
  openRegistrationModal,
  setLogin,
  setRegistration
} from '../../redux/slice/isToken';
import { styles } from './style';
import './style/Auth.scss';
import { getFavoriteFromLogin } from '../../utils/Autorization/getFavoriteFormLogin';
import { getBasketFromLogin } from '../../utils/Autorization/getBasketFromLogin';

const AuthButton = () => {
  const [activeTab, setActiveTab] = useState('login');

  const dispatch = useDispatch();

  const isOpenedLoginModal = useSelector(state => state.isToken.isOpenedLoginModal);
  const isOpenedRegistrationModal = useSelector(state => state.isToken.isOpenedRegistrationModal);
  const isOpen = useSelector(state => state.modalSlice.openModal);
  const isModalForgotPass = useSelector(state => state.modalSlice.modalForgotPass);

  const handleCloseModal = () => dispatch(closeModal());

  const handleCloseForgotModal = () => {
    dispatch(closeModalForgotPass());
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFormLogin = async values => {
    try {
      const authURL = `${process.env.VITE_API_URL}/api/users/login`;
      const userResponse = await sendRequest(authURL, 'POST', values);
      const { status } = userResponse;
      const { token } = userResponse.data;
      const decodedToken = jwtDecode(token);
      const { _id, firstName, secondName, ...rest } = decodedToken;
      const updatedObj = { ...decodedToken, id: _id };
      window.localStorage.setItem('token', token);

      dispatch(setUser(updatedObj));

      getBasketFromLogin(_id, dispatch);
      getFavoriteFromLogin(_id, dispatch);

      if (status === 200) {
        dispatch(openLoginModal(true));
        handleCloseModal();
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      dispatch(setLogin(true));
    }
  };

  const handleFormSubmit = async values => {
    try {
      const authURL = `${process.env.VITE_API_URL}/api/users/`;
      const userResponse = await sendRequest(authURL, 'POST', values);
      const { status } = userResponse;

      const { token } = userResponse.data;
      const { _id } = jwtDecode(token);

      const products = [];
      const createData = { user: _id, products };
      const cartURL = `${process.env.VITE_API_URL}/api/backet`;
      const cartResponse = await sendRequest(cartURL, 'POST', createData);

      const favoriteURL = `${process.env.VITE_API_URL}/api/favorite`;
      const favoriteResponse = await sendRequest(favoriteURL, 'POST', createData);

      if (status === 200) {
        dispatch(openRegistrationModal(true));
        handleCloseModal();
        dispatch(setRegistration(false));
      }
    } catch (err) {
      dispatch(setRegistration(true));
      console.error('Error fetching', err);
    }
  };

  const handleCloseLoginModal = () => {
    dispatch(closeLoginModal(false));
  };

  const handleCloseRegistrationModal = () => {
    dispatch(openRegistrationModal(false));
  };

  useEffect(() => {
    if (isOpenedLoginModal) {
      const timer = setTimeout(() => {
        handleCloseLoginModal();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpenedLoginModal]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {!!isOpenedLoginModal && (
          <ModalWindow
            mainText="Ви успішно увійшли"
            handleClick={() => {}}
            handleClose={handleCloseLoginModal}
            isOpened={isOpenedLoginModal}
            actions={false}
          />
        )}
        {!!isOpenedRegistrationModal && (
          <ModalWindow
            mainText="Ви успішно зареєструвались"
            handleClick={() => {}}
            handleClose={handleCloseRegistrationModal}
            isOpened={isOpenedRegistrationModal}
            actions={false}
          />
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
                  Залиште Ваші дані, і ми зв'яжемося з вами. Ми не займаємося розсилкою рекламних повідомлень,
                  а також не передаємо контактні дані третім особам
                </Typography>
                <LoginForm activeTab={activeTab} handleFormSubmit={handleFormLogin} />
                <RegistrationForm activeTab={activeTab} handleFormSubmit={handleFormSubmit} />
              </div>
            </div>
          </Box>
        </Modal>
        <Modal
          open={isModalForgotPass}
          onClose={handleCloseForgotModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles}>
            <div className="auth-modal">
              <div className="auth-modal__container">
                <ForgotForm />
              </div>
            </div>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
};
export default AuthButton;
