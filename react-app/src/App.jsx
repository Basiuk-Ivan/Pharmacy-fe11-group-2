import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
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
// import PromotionSlider from './components/PageHome/PromotionSlider';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:category/*" element={<Products />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/company" element={<Company />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/editorial-policy" element={<EditorialPolicy />} />
        {/* <Route path="/:id" element={<ProductPage />} /> */}
        <Route path="/:category/:id" element={<ProductPage />} />
        <Route path="/orderprocess" element={<OrderProcess />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </ThemeProvider>
);
export default App;
