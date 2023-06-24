import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Typography, Menu, IconButton, Tooltip, MenuItem } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonIcon from '@mui/icons-material/Person';

import { MobileMenu } from './components/MobileMenu';
import { openModal } from '../../../redux/slice/modalSlice';
import { setToken } from '../../../redux/slice/isToken';

import { StyledBadge, wrapForActionsStyles, fillForIcon, colorForBadge } from './style';

const settings = [
  { name: 'Profile', path: '/cabinet' },
  { name: 'Account' },
  { name: 'Dashboard' },
  { name: 'Logout' }
];

const UserActions = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
    dispatch(setToken(token));
  }, [dispatch]);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setToken(null));
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <Box sx={wrapForActionsStyles}>
        {hasToken ? (
          <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, width: 40, height: 40 }}>
                <PersonIcon sx={fillForIcon} />
              </IconButton>
            </Tooltip>
            <NavLink to="/favourite">
              <IconButton aria-label="favorite">
                <StyledBadge badgeContent={favoriteItems.length} sx={colorForBadge}>
                  <FavoriteBorderOutlinedIcon sx={colorForBadge} />
                </StyledBadge>
              </IconButton>
            </NavLink>

            <NavLink to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartItems.length} sx={colorForBadge}>
                  <ShoppingCartOutlinedIcon sx={colorForBadge} />
                </StyledBadge>
              </IconButton>
            </NavLink>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem
                  key={setting.name}
                  onClick={setting.name === 'Logout' ? handleLogout : handleCloseUserMenu}
                >
                  <NavLink to={setting.path} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            <Tooltip title="Open modal">
              <IconButton onClick={handleOpenModal}>
                <PermIdentityOutlinedIcon sx={fillForIcon} />
              </IconButton>
            </Tooltip>
            <NavLink to="/favourite">
              <IconButton aria-label="favorite">
                <StyledBadge badgeContent={favoriteItems.length} sx={colorForBadge}>
                  <FavoriteBorderOutlinedIcon sx={colorForBadge} />
                </StyledBadge>
              </IconButton>
            </NavLink>

            <NavLink to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartItems.length} sx={colorForBadge}>
                  <ShoppingCartOutlinedIcon sx={colorForBadge} />
                </StyledBadge>
              </IconButton>
            </NavLink>
          </>
        )}
      </Box>

      <MobileMenu />
    </>
  );
};

export default UserActions;
