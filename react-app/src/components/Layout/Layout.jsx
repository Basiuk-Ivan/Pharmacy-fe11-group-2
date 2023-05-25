import { Outlet } from 'react-router-dom';
import { AppBar, Container, Toolbar, Box } from '@mui/material';
import AuthButton from '../Authorization/Autorization';
import ContactInfo from './ContactInfo';
import Logo from './Logo';
import SearchActions from './Search';
import UserActions from './UserActions';
import SocialMediaButton from './SocialMediaButton/SocialMediaButton';
import Menu from '../PageHome/Menu';
import Footer from './Footer/Footer';
import { appBarStyles, toolbarStyles, containerStyles } from './style';

const Layout = () => (
  <Container maxWidth="100vh">
    <Container sx={containerStyles} position="relative" maxWidth="lg">
      <AuthButton />
      <AppBar position="static" sx={appBarStyles}>
        <Toolbar sx={toolbarStyles}>
          <Logo />
          <SocialMediaButton />
          <ContactInfo />
          <SearchActions />
          <UserActions />
        </Toolbar>
      </AppBar>

      <Container position="relative" maxWidth="lg">
        <Menu />
        <Box>
          <Outlet />
        </Box>
      </Container>
    </Container>
    <Footer />
  </Container>
);

export default Layout;
