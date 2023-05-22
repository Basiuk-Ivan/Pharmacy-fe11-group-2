import { Outlet } from 'react-router-dom';
import { AppBar, Container, Toolbar, Box } from '@mui/material';
import ContactInfo from './ContactInfo';
import Logo from './Logo';
import SearchActions from './Search';
import UserActions from './UserActions';
import SocialMediaButton from './SocialMediaButton/SocialMediaButton';
import Menu from '../PageHome/Menu';
import Footer from './Footer/Footer';

const appBarStyles = {
  boxShadow: 'none',
  backgroundColor: '#fff',
  marginBottom: '80px',
  marginTop: '5px'
};

const Layout = () => (
  <>
    <Menu />

    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Container maxWidth="lg">
        <AppBar position="static" sx={appBarStyles}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', padding: 0 }}>
            <Logo />
            <SocialMediaButton />
            <ContactInfo />
            <SearchActions />
            <UserActions />
          </Toolbar>
        </AppBar>
      </Container>
      <Box flex="1" display="flex">
        <Container maxWidth="lg" sx={{ flex: '1 1 auto' }}>
          <main>
            <Outlet />
          </main>
        </Container>
      </Box>

      <Footer />
    </Box>
  </>
);

export default Layout;
