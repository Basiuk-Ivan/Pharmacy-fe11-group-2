import { Routes, Route } from 'react-router-dom';
// import { Container } from '@mui/material';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import SinglePage from './pages/SinglePage';
import Layout from './components/Layout';
import Favourite from './pages/Favourite';

const App = () => (
  // <Container maxWidth="lg">
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/post" element={<BlogPost />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/post/:id" element={<SinglePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  // </Container>
);
export default App;
