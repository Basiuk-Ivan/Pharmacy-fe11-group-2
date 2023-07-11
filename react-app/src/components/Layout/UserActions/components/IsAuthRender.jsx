import { useState } from 'react';
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { openLogoutModal, setLogin, setToken } from '../../../../redux/slice/isToken';
import { removeUser } from '../../../../redux/slice/userSlice';
import { deleteFromFavouriteItems } from '../../../../redux/slice/favouriteItems';
import { removeItem } from '../../../../redux/slice/cartItems';

import { StyledBadge, fillForIcon, colorForBadge } from '../style';

const settings = [{ name: 'Профіль', path: '/cabinet' }, { name: 'Вихід' }];

export const IsAuthRender = () => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');

    dispatch(setToken(null));
    navigate('/');

    dispatch(removeUser());
    dispatch(deleteFromFavouriteItems('all'));
    dispatch(removeItem('all'));
    dispatch(setLogin(false));

    dispatch(openLogoutModal(true));
  };

  return (
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
            onClick={setting.name === 'Вихід' ? handleLogout : handleCloseUserMenu}
          >
            <NavLink to={setting.path} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting.name}</Typography>
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
