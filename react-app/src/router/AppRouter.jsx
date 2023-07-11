import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Favourite from '../pages/Favourite';
import Cart from '../pages/Cart/Cart';
import RespondPage from '../pages/Response/RespondPage';
import { Step } from '../pages/BlogPages/steps';
import { Rede } from '../pages/BlogPages/rede';
import { Nature } from '../pages/BlogPages/nature';
import { Energy } from '../pages/BlogPages/energy';
import { Company } from '../pages/FooterPage/Company';
import { Delivery } from '../pages/FooterPage/Delivery';
import { Pay } from '../pages/FooterPage/Pay';
import { Agreement } from '../pages/FooterPage/Agreement';
import { EditorialPolicy } from '../pages/FooterPage/EditorialPolicy';
import { Terms } from '../pages/FooterPage/Terms';
import { Marketing } from '../pages/FooterPage/Marketing';
import { Job } from '../pages/FooterPage/Job';
import { Varranty } from '../pages/FooterPage/Varranty';
import ProductPage from '../pages/ProductPage';
import OrderProcess from '../pages/OrderProcess';
import Cabinet from '../pages/Cabinet';

const AppRouter = () => {
  return (
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
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/orderprocess" element={<OrderProcess />} />
        <Route path="/cabinet" element={<Cabinet />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
