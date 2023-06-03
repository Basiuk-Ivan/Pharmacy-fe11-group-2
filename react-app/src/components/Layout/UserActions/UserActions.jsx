import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { openModal } from '../../../redux/slice/modalSlice';

const UserActions = () => {
  // const products = useSelector(state => state.itemCards.items);
  // console.log('products:', products);

  const dispatch = useDispatch();
  const savedItemsCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const savedItemsFavorite = JSON.parse(localStorage.getItem('favouriteItems')) || [];

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <Box>
      <IconButton onClick={handleOpenModal}>
        <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>

      <NavLink to="/favourite">
        <IconButton>
          <FavoriteBorderOutlinedIcon sx={{ fill: '#2FD3AE' }} />
          <Typography sx={{ color: '#2FD3AE' }}>{savedItemsFavorite.length}</Typography>
        </IconButton>
      </NavLink>

      <NavLink to="/cart">
        <IconButton size="large">
          <ShoppingCartOutlinedIcon sx={{ fill: '#2FD3AE' }} />
          <Typography sx={{ color: '#2FD3AE' }}>{savedItemsCart.length}</Typography>
        </IconButton>
      </NavLink>
    </Box>
  );
};

export default UserActions;
