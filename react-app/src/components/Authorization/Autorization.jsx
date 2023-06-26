import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Tab, Tabs, Typography, Box, Button } from '@mui/material';
import jwtDecode from 'jwt-decode';
import { theme } from '../../tools/muiTheme';
import { closeModal } from '../../redux/slice/modalSlice';
import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegistrationForm';
import { styles } from './style';
import './style/Auth.scss';
import { setUser } from '../../redux/slice/userSlice';
import { sendRequest } from '../../tools/sendRequest';
import { removeItem, addToCartMoreOne } from '../../redux/slice/cartItems';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../redux/slice/favouriteItems';

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

  const favItm = useSelector(state => state.favouriteItems.favouriteItems);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFormLogin = async values => {
    try {
      const authURL = 'http://localhost:3004/api/users/login';
      const userResponse = await sendRequest(authURL, 'POST', values);
      const { token } = userResponse.data;
      const decodedToken = jwtDecode(token);
      const { _id, ...rest } = decodedToken;
      const updatedObj = { id: _id, ...rest };
      window.localStorage.setItem('token', token);
      dispatch(setUser(updatedObj));

      const cartURL = `http://localhost:3004/api/backet?user=${_id}`;
      const cartResponse = await sendRequest(cartURL);
      const cartProducts = cartResponse.data[0].products;
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
      const newCartData = { id: cartResponse.data[0].id, products: [...mergedProducts] };
      const cartULRForPUT = 'http://localhost:3004/api/backet';
      const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);
      window.localStorage.removeItem('cartItems');
      dispatch(removeItem('all'));
      mergedProducts.forEach(product => {
        dispatch(addToCartMoreOne({ id: product.productID, quantity: product.quantity }));
      });

      const favoriteURL = `http://localhost:3004/api/favorite?user=${_id}`;
      const favoriteResponse = await sendRequest(favoriteURL);
      const favoriteProducts = favoriteResponse.data[0].products;
      const favouriteItemsFromLS = JSON.parse(localStorage.getItem('favouriteItems')) || [];
      const favorites = favouriteItemsFromLS.map(item => item.id);
      const newFavorites = [...new Set([...favoriteProducts, ...favorites])];
      const newFavoriteData = { id: favoriteResponse.data[0].id, products: [...newFavorites] };
      const favoriteULRForPUT = 'http://localhost:3004/api/favorite';
      const favoritePUTResponse = await sendRequest(favoriteULRForPUT, 'PUT', newFavoriteData);
      window.localStorage.removeItem('favouriteItems');
      dispatch(deleteFromFavouriteItems('all'));
      newFavorites.forEach(product => {
        dispatch(addToFavouriteItems(product));
      });

      if (!userResponse.statusText) {
        setOpen(true);
        throw new Error('Network response was not ok');
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    }
    handleCloseModal();
  };

  const handleFormSubmit = async values => {
    try {
      const authURL = 'http://localhost:3004/api/users/';
      const userResponse = await sendRequest(authURL, 'POST', values);
      const { token } = userResponse.data;
      const { _id } = jwtDecode(token);

      const products = [];
      const createData = { user: _id, products };
      const cartURL = 'http://localhost:3004/api/backet';
      const cartResponse = await sendRequest(cartURL, 'POST', createData);

      const favoriteURL = 'http://localhost:3004/api/favorite';
      const favoriteResponse = await sendRequest(favoriteURL, 'POST', createData);

      if (!userResponse.statusText && !cartResponse.statusText && !favoriteResponse.statusText) {
        setOpen(true);
        throw new Error('Network response was not ok');
      }
    } catch (err) {
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
