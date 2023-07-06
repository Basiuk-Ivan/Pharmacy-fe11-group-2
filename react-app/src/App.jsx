import {CssBaseline} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { theme } from './tools/muiTheme';
import { setCartStoreId, setFavoriteStoreId, setUser } from './redux/slice/userSlice';
import { sendRequest } from './tools/sendRequest';
import { addToCartMoreOne } from './redux/slice/cartItems';
import { addToFavouriteItems } from './redux/slice/favouriteItems';
import { getUserDataFromDB } from './utils/ActionWithUser/getUserDataFromDB';
import AppRouter from './router/AppRouter';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const startLoading = async () => {
        const decodedToken = jwtDecode(token);

        const { _id } = decodedToken;
        const userData = await getUserDataFromDB(_id);

        const [currentUser, ...otherUsers] = userData;

        const updatedObj = { ...currentUser, id: _id };
        dispatch(setUser(updatedObj));

        const cartURL = `${process.env.VITE_API_URL}/api/backet?user=${_id}`;
        const cartResponse = await sendRequest(cartURL);
        const cartProducts = cartResponse.data.products;
        cartProducts.forEach(product => {
          dispatch(addToCartMoreOne({ id: product.productID, quantity: product.quantity }));
        });

        dispatch(setCartStoreId(cartResponse.data.id));

        const favoriteURL = `${process.env.VITE_API_URL}/api/favorite?user=${_id}`;
        const favoriteResponse = await sendRequest(favoriteURL);
        const favoriteProducts = favoriteResponse.data.products;
        const newFavorites = favoriteProducts.map(item => item);
        newFavorites.forEach(product => {
          dispatch(addToFavouriteItems(product));
        });

        dispatch(setFavoriteStoreId(favoriteResponse.data.id));
      };
      startLoading();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <AppRouter />
      </>
    </ThemeProvider>
  );
};
export default App;
