import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { openModal } from '../../../redux/slice/modalSlice';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    padding: '0 4px'
  }
}));

const UserActions = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <Box>
      <IconButton onClick={handleOpenModal}>
        <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>

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
    </Box>
  );
};

export default UserActions;
