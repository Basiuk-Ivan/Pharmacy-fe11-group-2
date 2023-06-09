import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import logo from '../../../../../assets/logo.svg';

import { wrapperStyles, navLinkStyles, avatarXSStyles, menuStyles, menuItemStyles } from '../../style';

const pages = [
  {
    title: 'Ліки від кашлю, застуди та грипу',
    path: '/coughColdFlu'
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

export const MenuAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={wrapperStyles}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <NavLink to="/" style={navLinkStyles}>
          <Avatar sx={avatarXSStyles} alt="Логотип" src={logo} />
        </NavLink>
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
        sx={menuStyles}
      >
        {pages.map(page => (
          <NavLink key={page.title} to={page.path}>
            <MenuItem key={page.title} onClick={handleCloseNavMenu} sx={menuItemStyles}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          </NavLink>
        ))}
      </Menu>
    </>
  );
};
