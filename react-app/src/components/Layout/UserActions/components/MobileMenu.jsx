import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const MobileMenu = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
  }, []);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // eslint-disable-next-line no-unused-vars
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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

        {hasToken ? (
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
                <Typography>Profile</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  {settings.map(setting => (
                    <MenuItem component="div" key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
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
            <Typography>Profile</Typography>
          </MenuItem>
        )}
      </Menu>
    </>
  );
};
