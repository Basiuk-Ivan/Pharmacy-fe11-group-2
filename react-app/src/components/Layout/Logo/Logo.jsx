import { NavLink } from 'react-router-dom';
import { Box, Avatar, Typography } from '@mui/material';
import logo from '../../../assets/logo.svg';

const Logo = () => (
  <Box>
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
        <Avatar alt="Логотип" src={logo} />
        <Typography component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography fontFamily="Roboto" component="span" sx={{ fontSize: 22, color: '#011D71' }}>
            Аптека.онлайн
          </Typography>
          <Typography fontFamily="Roboto" component="span" sx={{ fontSize: 14, color: '#7894A4' }}>
            Ваша онлайн аптека
          </Typography>
        </Typography>
      </Box>
    </NavLink>
  </Box>
);

export default Logo;
