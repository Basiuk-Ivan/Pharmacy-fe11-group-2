import { NavLink } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const UserActions = () => (
  <Box>
    <IconButton>
      <PermIdentityOutlinedIcon sx={{ fill: '#2FD3AE' }} />
    </IconButton>

    <NavLink to="/favourite">
      <IconButton>
        <FavoriteBorderOutlinedIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
    </NavLink>

    <NavLink to="/cart">
      <IconButton size="large">
        <ShoppingCartOutlinedIcon sx={{ fill: '#2FD3AE' }} />
      </IconButton>
    </NavLink>
  </Box>
);

export default UserActions;
