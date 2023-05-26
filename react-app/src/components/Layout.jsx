import { Outlet, NavLink } from 'react-router-dom';
import s from '../style/components/header.module.scss';

const Layout = () => (
  <>
    <header className={s.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/post">Post</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default Layout;
