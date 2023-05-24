import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound';
import SinglePage from './pages/SinglePage';
import Layout from './components/Layout';
import s from './style/index.module.scss';

const App = () => (
  <main className={s.app}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/post" element={<BlogPost />} />
        <Route path="/post/:id" element={<SinglePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </main>
);
export default App;
