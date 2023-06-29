import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../../../assets/logo.svg';

import { wrapperStyles, avatarXSStyles, menuStyles, menuItemStyles } from '../../style';
import { mainCategory } from '../../../../../redux/slice/filterBaseSlice';

export const MenuAppBar = () => {
  const filterBase = useSelector(state => state.filterBase);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = [
    {
      title: 'Ліки від кашлю, застуди та грипу',
      path: '/cough-cold-flu',
      req: `product/?page=1&categories=cough-cold-flu&sort=1&limit=${filterBase.limit}`
    },
    {
      title: 'Знеболюючі',
      path: '/painkillers',
      req: `product/?page=1&categories=painkillers&sort=1&limit=${filterBase.limit}`
    },
    {
      title: 'Для нервової системи',
      path: '/nervous-system',
      req: `product/?page=1&categories=nervous-system&sort=1&limit=${filterBase.limit}`
    },
    {
      title: 'Серцево-судинна система',
      path: '/cardiovascular-system',
      req: `product/?page=1&categories=cardiovascular-system&sort=1&limit=${filterBase.limit}`
    }
  ];

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const choiceMainCategory = path => {
    dispatch(mainCategory(path.slice(1)));
    sessionStorage.setItem('currentCategory', path.slice(1));
    sessionStorage.removeItem('accordionsData');
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
        <NavLink to="/">
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
          <NavLink key={page.title} to={page.req}>
            <MenuItem key={page.title} onClick={handleCloseNavMenu} sx={menuItemStyles}>
              <Typography onClick={() => choiceMainCategory(page.path)} textAlign="center">{page.title}</Typography>
            </MenuItem>
          </NavLink>
        ))}
      </Menu>
    </>
  );
};
