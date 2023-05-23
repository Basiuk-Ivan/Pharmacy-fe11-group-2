import { NavLink } from 'react-router-dom';
import { Box, Avatar, Typography } from '@mui/material';
import logo from '../../../assets/logo.svg';
import {
  wrapperStyles,
  navLinkStyles,
  bodyStyle,
  healthOnlineWrappStyle,
  logoTextStyle,
  logoText2Style
} from './style';

const Logo = () => (
  <Box sx={wrapperStyles}>
    <NavLink to="/" style={navLinkStyles}>
      <Box sx={bodyStyle}>
        <Avatar alt="Логотип" src={logo} />
        <Typography component="div" sx={healthOnlineWrappStyle}>
          <Typography fontFamily="Roboto" component="span" sx={logoTextStyle}>
            Аптека.онлайн
          </Typography>
          <Typography fontFamily="Roboto" component="span" sx={logoText2Style}>
            Ваша онлайн аптека
          </Typography>
        </Typography>
      </Box>
    </NavLink>
  </Box>
);

export default Logo;
