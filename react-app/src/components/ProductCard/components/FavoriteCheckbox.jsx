import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { addToFavouriteLocalStorage } from '../../../utils/LocalStore/addToFavouriteLocalStorage';
import { removeFromFavouriteLocalStorage } from '../../../utils/LocalStore/removeFromFavouriteLocalStorage';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../../redux/slice/favouriteItems';
import { favoriteIconStyles, checkBoxStyles, favoriteIcon } from '../style';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const FavoriteCheckbox = ({ isInCart, productItem }) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteString = localStorage.getItem('favouriteItems');

    if (favoriteString) {
      const favouriteItems = JSON.parse(favoriteString);

      const isItemFavorite = favouriteItems.some(elem => elem.id === productItem.id);
      setIsFavorite(isItemFavorite);
    }
  }, [productItem.id]);

  const handleFavoriteClick = event => {
    event.preventDefault();
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addToFavouriteLocalStorage(productItem);
      dispatch(addToFavouriteItems(productItem.id));
    } else {
      removeFromFavouriteLocalStorage(productItem);
      dispatch(deleteFromFavouriteItems(productItem.id));
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
