import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Menu,
  Badge,
  IconButton,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreIcon from '@mui/icons-material/MoreVert';
import { openModal } from '../../../../redux/slice/modalSlice';
import { setToken, removeToken, openLogoutModal, setLogin } from '../../../../redux/slice/isToken';
import { removeUser } from '../../../../redux/slice/userSlice';
import { deleteFromFavouriteItems } from '../../../../redux/slice/favouriteItems';
import { removeItem } from '../../../../redux/slice/cartItems';
import ModalWindow from '../../../ModalWindow';

const settings = [{ name: 'Профіль', path: '/cabinet' }, { name: 'Вихід' }];
export const MobileMenu = () => {
  const dispatch = useDispatch();
  const isOpenedLogoutModal = useSelector(state => state.isToken.isOpenedLogoutModal);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);
  const isAuth = useSelector(state => state.user.isAuth);
  const navigate = useNavigate();

  const [hasToken, setHasToken] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   setHasToken(!!token);
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
    dispatch(setToken(token));
  }, [dispatch]);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  // const [hasToken, setHasToken] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    dispatch(removeToken());
    window.localStorage.setItem('token', '');
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setToken(null));
    navigate('/');
    // window.location.reload();
    dispatch(removeUser());
    dispatch(deleteFromFavouriteItems('all'));
    dispatch(removeItem('all'));
    dispatch(openLogoutModal(true));
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

        {isAuth ? (
          <MenuItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <IconButton sx={{ p: 0 }}>
                  <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
                </IconButton>
                <Typography>Профіль</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  {settings.map(setting => (
                    <MenuItem
                      component="div"
                      key={setting.name}
                      onClick={setting.name === 'Вихід' ? handleLogout : handleCloseUserMenu}
                    >
                      <NavLink to={setting.path} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting.name}</Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </MenuItem>
        ) : (
          <MenuItem sx={{ display: 'flex', gap: '5px' }} onClick={handleOpenModal}>
            <IconButton>
              <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
            </IconButton>
            <Typography>Профіль</Typography>
          </MenuItem>
        )}
      </Menu>
    </>
  );
};
