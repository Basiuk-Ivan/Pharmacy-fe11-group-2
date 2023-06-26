import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { addToFavouriteLocalStorage } from '../../../utils/LocalStore/addToFavouriteLocalStorage';
import { removeFromFavouriteLocalStorage } from '../../../utils/LocalStore/removeFromFavouriteLocalStorage';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../../redux/slice/favouriteItems';
import { favoriteIconStyles, checkBoxStyles, favoriteIcon } from '../style';
import { addToFavoriteUserDBProduct } from '../../../utils/ActionsWithProduct/addToFavoriteUserDBProduct';
import { removeFromFavoriteUserDBProduct } from '../../../utils/ActionsWithProduct/removeFromFavoriteUserDBProduct';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const FavoriteCheckbox = ({ isInCart, productItem }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteString = localStorage.getItem('favouriteItems');

    if (favoriteString) {
      const favouriteItems = JSON.parse(favoriteString);

      const isItemFavorite = favouriteItems.some(elem => elem.id === productItem.id);
      setIsFavorite(isItemFavorite);
    }
  }, [productItem.id]);

  const handleFavoriteClick = async event => {
    event.preventDefault();
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      dispatch(addToFavouriteItems(productItem.id));
      if (isAuth) {
        await addToFavoriteUserDBProduct(userId, productItem.id);
      } else {
        addToFavouriteLocalStorage(productItem);
      }
    } else {
      dispatch(deleteFromFavouriteItems(productItem.id));
      if (isAuth) {
        await removeFromFavoriteUserDBProduct(userId, productItem.id);
      } else {
        removeFromFavouriteLocalStorage(productItem);
      }
    }
  };

  const favoriteIconStyle = favoriteIconStyles(isInCart);

  return (
    <Box sx={favoriteIconStyle} onClick={handleFavoriteClick}>
      <Checkbox
        sx={checkBoxStyles}
        {...label}
        icon={<FavoriteBorderIcon />}
        checkedIcon={<FavoriteIcon sx={favoriteIcon} />}
        checked={isFavorite}
      />
    </Box>
  );
};
