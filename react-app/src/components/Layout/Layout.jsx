import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from './Logo/Logo';
import Menu from './Menu';
import AuthButton from '../Authorization/Autorization';
import SocialMediaButton from './SocialMediaButton/SocialMediaButton';
import ContactInfo from './ContactInfo/ContactInfo';
import SearchActions from './Search/Search';
import { MobileLogo } from './Logo/components/MobileLogo/MobileLogo';
import UserActions from './UserActions/UserActions';
import Footer from './Footer/Footer';
import { theme, containerMainStyles, toolBarStyles } from './style';

const Layout = () => (
  <ThemeProvider theme={theme}>
    <AppBar position="fixed">
      <AuthButton />
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={toolBarStyles}>
          <Logo />
          <MobileLogo />
          <SocialMediaButton />
          <ContactInfo />
          <SearchActions />
          <UserActions />
        </Toolbar>
      </Container>
      <Menu />
    </AppBar>
    <Container position="relative" maxWidth="lg" sx={containerMainStyles}>
      <Outlet />
    </Container>
    <Footer />
  </ThemeProvider>
);

export default Layout;
