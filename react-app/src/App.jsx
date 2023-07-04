import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Favourite from './pages/Favourite';
import OrderProcess from './pages/OrderProcess';
import ProductPage from './pages/ProductPage';
import { theme } from './tools/muiTheme';
import Cabinet from './pages/Cabinet';
import { Company } from './pages/FooterPage/Company';
import { Delivery } from './pages/FooterPage/Delivery';
import { Pay } from './pages/FooterPage/Pay';
import { Agreement } from './pages/FooterPage/Agreement';
import { EditorialPolicy } from './pages/FooterPage/EditorialPolicy';
import { Terms } from './pages/FooterPage/Terms';
import { Marketing } from './pages/FooterPage/Marketing';
import { Job } from './pages/FooterPage/Job';
import { Varranty } from './pages/FooterPage/Varranty';
import { setCartStoreId, setFavoriteStoreId, setUser } from './redux/slice/userSlice';
import { Step } from './pages/BlogPages/steps';
import { sendRequest } from './tools/sendRequest';
import { addToCartMoreOne } from './redux/slice/cartItems';
import { addToFavouriteItems } from './redux/slice/favouriteItems';
import { getUserDataFromDB } from './utils/ActionWithUser/getUserDataFromDB';
import RespondPage from './pages/Response/RespondPage';
import { Rede } from './pages/BlogPages/rede';
import { Nature } from './pages/BlogPages/nature';
import { Energy } from './pages/BlogPages/energy';

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:category/*" element={<Products />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/respond" element={<RespondPage />} />
          <Route path="/step" element={<Step />} />
          <Route path="/rede" element={<Rede />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/company" element={<Company />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/job" element={<Job />} />
          <Route path="/varranty" element={<Varranty />} />
          <Route path="/:category/:id" element={<ProductPage />} />
          <Route path="/orderprocess" element={<OrderProcess />} />
          <Route path="/cabinet" element={<Cabinet />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </ThemeProvider>
  );
};
export default App;
