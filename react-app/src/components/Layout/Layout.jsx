import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Box
  // , Grid
} from '@mui/material';
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
  marginBottom: '85px'
  // marginTop: '20px'
};

const Layout = () => (
  <>
    <Menu />
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" minHeight="100%">
        {/* <Grid container spacing={2}>
          <AppBar position="static" sx={appBarStyles}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', padding: 0 }}>
              <Grid item xs={4}>
                <Logo />
              </Grid>
              <Grid item xs={4}>
                <SocialMediaButton />
              </Grid>
              <Grid item xs={10}>
                <ContactInfo />
              </Grid>
              <Grid item xs={4}>
                <SearchActions />
              </Grid>
              <Grid item xs={4}>
                <UserActions />
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid> */}

        {/* уточнити як краще зробити, через Grid, чи так як написано нижче */}

        <AppBar position="static" sx={appBarStyles}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', padding: 0 }}>
            <Logo />
            <SocialMediaButton />
            <ContactInfo />
            <SearchActions />
            <UserActions />
          </Toolbar>
        </AppBar>

        <Box flex="1" display="flex">
          <Container maxWidth="lg" sx={{ flex: '1 1 auto' }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Container>
    <Footer />
  </>
);

export default Layout;
