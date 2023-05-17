import {
  Outlet
  //  NavLink
} from 'react-router-dom';
import Header from '../Header';
import Menu from '../Menu';
import s from '../../style/components/header.module.scss';

const Layout = () => (
  <>
    <header className={s.header}>
      <div className={s.headerMain}>
        <Header />
      </div>
      <div>
        <Menu />
      </div>

      {/* <NavLink to="/">Home</NavLink> */}
      {/* <NavLink to="/post">Post</NavLink>
      <NavLink to="/cart">Cart</NavLink> */}
    </header>
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default Layout;
