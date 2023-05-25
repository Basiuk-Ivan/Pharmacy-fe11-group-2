import { Outlet } from 'react-router-dom';
import { AppBar, Container, Toolbar, Box } from '@mui/material';
import ContactInfo from './ContactInfo';
import Logo from './Logo';
import SearchActions from './Search';
import UserActions from './UserActions';
import SocialMediaButton from './SocialMediaButton/SocialMediaButton';
import Menu from '../PageHome/Menu';
import Footer from './Footer/Footer';
import { appBarStyles, toolbarStyles } from './styleForLayout';
import AuthButton from '../Authorization/Autorization.jsx';

const Layout = () => (
  <Container maxWidth="100vh">
    <Container
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      position="relative"
      maxWidth="lg"
    >
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
          <AuthButton />
          <Outlet />
        </Box>
      </Container>
    </Container>
    <Footer />
  </Container>
);

export default Layout;
