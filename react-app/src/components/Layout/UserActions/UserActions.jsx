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
import {
  closeLoginModal,
  openLoginModal,
  openLogoutModal,
  setLogin,
  setToken
} from '../../../redux/slice/isToken';

import { StyledBadge, wrapForActionsStyles, fillForIcon, colorForBadge } from './style';
import { removeUser } from '../../../redux/slice/userSlice';
import { deleteFromFavouriteItems } from '../../../redux/slice/favouriteItems';
import { removeItem } from '../../../redux/slice/cartItems';
import ModalWindow from '../../ModalWindow';

const settings = [{ name: 'Профіль', path: '/cabinet' }, { name: 'Вихід' }];

const UserActions = () => {
  const dispatch = useDispatch();
  const isOpenedLogoutModal = useSelector(state => state.isToken.isOpenedLogoutModal);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);
  const isAuth = useSelector(state => state.user.isAuth);
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

    dispatch(removeUser());
    dispatch(deleteFromFavouriteItems('all'));
    dispatch(removeItem('all'));
    dispatch(setLogin(false));

    dispatch(openLogoutModal(true));
  };

  const handleCloseLogoutModal = () => {
    dispatch(openLogoutModal(false));
  };

  return (
    <>
      {!!isOpenedLogoutModal && (
        <ModalWindow
          mainText="Ви вийшли з кабінета"
          handleClick={() => {}}
          handleClose={handleCloseLogoutModal}
          isOpened={isOpenedLogoutModal}
          actions={false}
        />
      )}
      <Box sx={wrapForActionsStyles}>
        {isAuth ? (
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
