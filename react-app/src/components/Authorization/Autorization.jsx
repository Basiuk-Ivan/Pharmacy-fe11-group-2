import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Tab, Tabs, Typography, Box, Button } from '@mui/material';
import jwtDecode from 'jwt-decode';
import { theme } from '../../tools/muiTheme';
import { closeModal, closeModalForgotPass } from '../../redux/slice/modalSlice';
import { LoginForm } from './components/LoginForm';
import { ForgotForm } from './components/ForgotForm';
import { RegistrationForm } from './components/RegistrationForm';
import { styles } from './style';
import './style/Auth.scss';
import { setCartStoreId, setFavoriteStoreId, setUser } from '../../redux/slice/userSlice';
import { sendRequest } from '../../tools/sendRequest';
import { removeItem, addToCartMoreOne } from '../../redux/slice/cartItems';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../redux/slice/favouriteItems';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 20,
  p: 4
};

const AuthButton = () => {
  const [open, setOpen] = React.useState(false);

  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
  const handleWelcomeModalClose = () => setWelcomeModalOpen(false);
  useEffect(() => {
    if (welcomeModalOpen) {
      const timer = setTimeout(() => {
        handleWelcomeModalClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [welcomeModalOpen]);

  const handleClose = () => setOpen(false);

  const isOpen = useSelector(state => state.modalSlice.openModal);
  const isModalForgotPass = useSelector(state => state.modalSlice.modalForgotPass);
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(closeModal());
  const handleCloseForgotModal = () => {
    dispatch(closeModalForgotPass());
  };

  const [activeTab, setActiveTab] = useState('login');

  const favItm = useSelector(state => state.favouriteItems.favouriteItems);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const [name, setFirstName] = useState('');
  const [lastName, setSecondName] = useState('');

  const handleFormLogin = async values => {
    try {
      const authURL = `${process.env.VITE_API_URL}/api/users/login`;
      const userResponse = await sendRequest(authURL, 'POST', values);
      const { token } = userResponse.data;
      const decodedToken = jwtDecode(token);
      const { _id, firstName, secondName, ...rest } = decodedToken;
      setFirstName(firstName);
      setSecondName(secondName);
      const updatedObj = { ...decodedToken, id: _id };
      window.localStorage.setItem('token', token);
      dispatch(setUser(updatedObj));

      const cartURL = `${process.env.VITE_API_URL}/api/backet?user=${_id}`;
      const cartResponse = await sendRequest(cartURL);
      const cartProducts = cartResponse.data.products;
      const cartItemsFromLS = JSON.parse(localStorage.getItem('cartItems')) || [];
      const productsLS = cartItemsFromLS.map(({ id, quantity }) => {
        const newCartObj = { productID: id, quantity };
        return newCartObj;
      });
      const mergedProducts = [...cartProducts];
      productsLS.forEach(itemLS => {
        const foundIndex = mergedProducts.findIndex(item => item.productID === itemLS.productID);
        if (foundIndex !== -1) {
          mergedProducts[foundIndex].quantity += itemLS.quantity;
        } else {
          mergedProducts.push({ ...itemLS });
        }
      });
      dispatch(setCartStoreId(cartResponse.data.id));
      const newCartData = { id: cartResponse.data.id, products: [...mergedProducts] };
      const cartULRForPUT = `${process.env.VITE_API_URL}/api/backet`;
      const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);
      window.localStorage.removeItem('cartItems');
      dispatch(removeItem('all'));
      mergedProducts.forEach(product => {
        dispatch(addToCartMoreOne({ id: product.productID, quantity: product.quantity }));
      });

      const favoriteURL = `${process.env.VITE_API_URL}/api/favorite?user=${_id}`;
      const favoriteResponse = await sendRequest(favoriteURL);
      const favoriteProducts = favoriteResponse.data.products;
      const favouriteItemsFromLS = JSON.parse(localStorage.getItem('favouriteItems')) || [];
      const favorites = favouriteItemsFromLS.map(item => item.id);
      const newFavorites = [...new Set([...favoriteProducts, ...favorites])];

      dispatch(setFavoriteStoreId(favoriteResponse.data.id));
      const newFavoriteData = { id: favoriteResponse.data.id, products: [...newFavorites] };

      const favoriteULRForPUT = `${process.env.VITE_API_URL}/api/favorite`;
      const favoritePUTResponse = await sendRequest(favoriteULRForPUT, 'PUT', newFavoriteData);
      window.localStorage.removeItem('favouriteItems');
      dispatch(deleteFromFavouriteItems('all'));
      newFavorites.forEach(product => {
        dispatch(addToFavouriteItems(product));
      });

      // if (!userResponse.statusText) {
      //   setOpen(true);
      //   throw new Error('Network response was not ok');
      // } else {
      //   setWelcomeModalOpen(true);
      // }
    } catch (err) {
      console.error('Error fetching products:', err);
    }
    handleCloseModal();
  };

  const handleFormSubmit = async values => {
    try {
      const authURL = `${process.env.VITE_API_URL}/api/users/`;
      const userResponse = await sendRequest(authURL, 'POST', values);

      const { token } = userResponse.data;
      const { _id } = jwtDecode(token);

      const products = [];
      const createData = { user: _id, products };
      const cartURL = `${process.env.VITE_API_URL}/api/backet`;
      const cartResponse = await sendRequest(cartURL, 'POST', createData);

      const favoriteURL = `${process.env.VITE_API_URL}/api/favorite`;
      const favoriteResponse = await sendRequest(favoriteURL, 'POST', createData);

      // if (!userResponse.statusText && !cartResponse.statusText && !favoriteResponse.statusText) {
      //   setOpen(true);
      //   throw new Error('Network response was not ok');
      // }
      // if (!userResponse.statusText) {
      //   throw new Error('Network response was not ok');
      // }
    } catch (err) {
      setOpen(true);
      console.error('Error fetching', err);
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
        {!!welcomeModalOpen && (
          <Modal
            open={welcomeModalOpen}
            onClose={() => setWelcomeModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Привіт, {name} {lastName} !
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Ласкаво просимо на наш сайт. Сподіваємось, вам сподобаються наші пропозиції.
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
      </div>
    </ThemeProvider>
  );
};
export default AuthButton;
