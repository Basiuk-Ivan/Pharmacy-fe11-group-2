import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, Menu, Badge, IconButton, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import { setToken, openLogoutModal, setLogin } from '../../../../redux/slice/isToken';
import ModalWindow from '../../../ModalWindow';
import { IsAuthRender } from './components/IsAuthRender';
import { NotAuthRender } from './components/NotAuthRender';

export const MobileMenu = () => {
  const dispatch = useDispatch();
  const isOpenedLogoutModal = useSelector(state => state.isToken.isOpenedLogoutModal);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);
  const isAuth = useSelector(state => state.user.isAuth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(setToken(token));
  }, [dispatch]);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCloseLogoutModal = () => {
    dispatch(openLogoutModal(false));
    dispatch(setLogin(false));
  };

  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      padding: '0 4px'
    }
  }));

  const mobileMenuId = 'primary-search-account-menu-mobile';

  useEffect(() => {
    if (isOpenedLogoutModal) {
      const timer = setTimeout(() => {
        handleCloseLogoutModal();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpenedLogoutModal]);

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
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>

      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 50,
          horizontal: 'right'
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <NavLink to="/favourite">
          <MenuItem sx={{ display: 'flex', gap: '5px' }}>
            <IconButton aria-label="favorite">
              <StyledBadge badgeContent={favoriteItems.length} sx={{ color: '#2FD3AE' }}>
                <FavoriteBorderOutlinedIcon sx={{ color: '#2FD3AE' }} />
              </StyledBadge>
            </IconButton>
            <p>Улюблене</p>
          </MenuItem>
        </NavLink>

        <NavLink to="/cart">
          <MenuItem sx={{ display: 'flex', gap: '5px' }}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartItems.length} sx={{ color: '#2FD3AE' }}>
                <ShoppingCartOutlinedIcon sx={{ color: '#2FD3AE' }} />
              </StyledBadge>
            </IconButton>
            <p>Корзина</p>
          </MenuItem>
        </NavLink>

        {isAuth ? <IsAuthRender /> : <NotAuthRender />}
      </Menu>
    </>
  );
};
