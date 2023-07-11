import { NavLink } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import logo from '../../../../../assets/logo.svg';

export const MobileLogo = () => (
  <NavLink to="/">
    <Box sx={{ display: 'flex' }}>
      <Avatar sx={{ display: { xs: 'none', sm: 'flex', md: 'none' }, mr: 2 }} alt="Логотип" src={logo} />

      <Box sx={{ display: { xs: 'none', flexDirection: 'column', sm: 'flex', md: 'none' } }}>
        <Typography
          fontFamily="Roboto"
          noWrap
          sx={{
            mr: 2,
            fontSize: 18,
            flexGrow: 1,
            color: '#011D71',
            textDecoration: 'none',
            lineHeight: 1
          }}
        >
          Аптека.онлайн
        </Typography>
        <Typography
          fontFamily="Roboto"
          noWrap
          sx={{
            mr: 2,
            fontSize: 14,
            flexGrow: 1,
            color: '#7894A4',
            textDecoration: 'none',
            lineHeight: 1
          }}
        >
          Ваша онлайн аптека
        </Typography>
      </Box>
    </Box>
  </NavLink>
);
