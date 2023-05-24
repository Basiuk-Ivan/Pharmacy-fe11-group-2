import { Outlet, NavLink } from 'react-router-dom';
import s from '../style/components/header.module.scss';
import AuthButton from './Authorization/Autorization.jsx';
import Cart from '../pages/Cart/Cart.jsx';

const Layout = () => (
  <>
    <header className={s.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/post">Post</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      {/*<Cart></Cart>*/}
      <AuthButton />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default Layout;
