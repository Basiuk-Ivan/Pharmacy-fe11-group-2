import { IconButton, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { openModal } from '../../../../redux/slice/modalSlice';

import { StyledBadge, fillForIcon, colorForBadge } from '../style';

export const NotAuthRender = () => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const cartItems = useSelector(state => state.itemCards.items);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
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
  );
};
