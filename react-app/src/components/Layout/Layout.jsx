import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from './Logo/Logo';
import MenuMenu from '../PageHome/Menu';
import AuthButton from '../Authorization/Autorization';
import SocialMediaButton from './SocialMediaButton/SocialMediaButton';
import ContactInfo from './ContactInfo/ContactInfo';
import SearchActions from './Search/Search';
import MobileLogo from './Logo/Mobile/MobileLogo';
import UserActions from './UserActions/UserActions';
import Footer from './Footer/Footer';

const Layout = () => (
  <>
    <AppBar position="fixed">
      <AuthButton />
      <Container disableGutters maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Logo />
          <SocialMediaButton />
          <ContactInfo />
          <MobileLogo />
          <SearchActions />
          <UserActions />
        </Toolbar>
      </Container>
      <MenuMenu />
    </AppBar>
    <Container sx={{ marginTop: '133px' }} position="relative" maxWidth="lg" disableGutters>
      <Outlet />
    </Container>
    <Footer />
  </>
);

export default Layout;
