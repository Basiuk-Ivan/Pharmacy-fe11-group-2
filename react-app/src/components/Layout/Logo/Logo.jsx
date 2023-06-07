import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';

import logo from '../../../assets/logo.svg';
// import MobileLogo from './Mobile/MobileLogo';

const pages = [
  {
    title: 'Ліки від кашлю, застуди та грипу',
    path: '/cough-cold-flu'
  },
  {
    title: 'Знеболюючі',
    path: '/painkillers'
  },
  {
    title: 'Для нервової системи',
    path: '/nervous-system'
  },
  {
    title: 'Серцево-судинна система',
    path: '/cardiovascular-system'
  }
];

const Logo = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {pages.map(page => (
          <NavLink key={page.title} to={page.path}>
            <MenuItem key={page.title} onClick={handleCloseNavMenu} sx={{ color: 'black' }}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          </NavLink>
        ))}
      </Menu>
      <NavLink to="/" style={{ display: 'flex' }}>
        <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} alt="Логотип" src={logo} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box>
            <Typography
              fontFamily="Roboto"
              noWrap
              sx={{
                fontSize: 22,
                lineHeight: 1,
                color: '#011D71',
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none'
              }}
            >
              Аптека.онлайн
            </Typography>
            <Typography
              fontFamily="Roboto"
              noWrap
              href="/"
              sx={{
                fontSize: 14,
                color: '#7894A4',
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none'
              }}
            >
              Ваша онлайн аптека
            </Typography>
          </Box>
        </Box>
        <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} alt="Логотип" src={logo} />
      </NavLink>
    </>
  );
};

export default Logo;
