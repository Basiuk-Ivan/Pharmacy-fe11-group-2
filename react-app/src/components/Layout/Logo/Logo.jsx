import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { MenuAppBar } from './components/MenuAppBar/MenuAppBar';
import logo from '../../../assets/logo.svg';

import { avatarMDStyles, wrapForTextStyles, healthTextMainStyles, healthTextSecondStyles } from './style';

const Logo = () => (
  <>
    <MenuAppBar />

    <NavLink to="/">
      <Box sx={{ display: 'flex' }}>
        <Avatar sx={avatarMDStyles} alt="Логотип" src={logo} />
        <Box sx={wrapForTextStyles}>
          <Box>
            <Typography fontFamily="Roboto" noWrap sx={healthTextMainStyles}>
              Аптека.онлайн
            </Typography>
            <Typography fontFamily="Roboto" noWrap href="/" sx={healthTextSecondStyles}>
              Ваша онлайн аптека
            </Typography>
          </Box>
        </Box>
      </Box>
    </NavLink>
  </>
);

export default Logo;
