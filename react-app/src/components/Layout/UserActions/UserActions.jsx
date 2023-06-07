import * as React from 'react';
import {
  // useDispatch,
  useSelector
} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AuthButton from '../../Authorization/Autorization';
// import { openModal } from '../../../redux/slice/modalSlice';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const UserActions = () => {
  // const dispatch = useDispatch();
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      padding: '0 4px'
    }
  }));
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
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
      <MenuItem>
        <NavLink to="/favourite">
          <IconButton aria-label="favorite">
            <StyledBadge badgeContent={favoriteItems.length} sx={{ color: '#2FD3AE' }}>
              <FavoriteBorderOutlinedIcon sx={{ color: '#2FD3AE' }} />
            </StyledBadge>
          </IconButton>
        </NavLink>
        <p>Улюблене</p>
      </MenuItem>
      <MenuItem>
        <NavLink to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartItems.length} sx={{ color: '#2FD3AE' }}>
              <ShoppingCartOutlinedIcon sx={{ color: '#2FD3AE' }} />
            </StyledBadge>
          </IconButton>
        </NavLink>
        <p>Корзина</p>
      </MenuItem>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <IconButton sx={{ p: 0 }}>
            <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
          </IconButton>
          <Typography>Profile</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Box>
            {settings.map(setting => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Menu>
  );

  // const handleOpenModal = () => {
  //   dispatch(openModal());
  // };

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex', flexWrap: 'wrap' } }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
          </IconButton>
        </Tooltip>
        <NavLink to="/favourite">
          <IconButton aria-label="favorite">
            <StyledBadge badgeContent={favoriteItems.length} sx={{ color: '#2FD3AE' }}>
              <FavoriteBorderOutlinedIcon sx={{ color: '#2FD3AE' }} />
            </StyledBadge>
          </IconButton>
        </NavLink>

        <NavLink to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartItems.length} sx={{ color: '#2FD3AE' }}>
              <ShoppingCartOutlinedIcon sx={{ color: '#2FD3AE' }} />
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
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
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
      {renderMobileMenu}
    </>
  );
};

export default UserActions;
