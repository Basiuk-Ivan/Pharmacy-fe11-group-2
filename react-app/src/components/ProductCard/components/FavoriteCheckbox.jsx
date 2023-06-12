import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { addToFavouriteLocalStor } from '../../../utils/LocalStore/addToFavouriteLocalStor';
import { removeFromFavouriteLocalStor } from '../../../utils/LocalStore/removeFromFavouriteLocalStor';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../../redux/slice/favouriteItems';
import { favoriteIconStyles, checkBoxStyles, favoriteIcon } from '../style';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const FavoriteCheckbox = ({ isInCart, productItem }) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = event => {
    event.preventDefault();
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addToFavouriteLocalStor(productItem);
      dispatch(addToFavouriteItems(productItem));
    } else {
      removeFromFavouriteLocalStor(productItem);
      dispatch(deleteFromFavouriteItems(productItem.id));
    }
  };

  useEffect(() => {
    const productItemFavourite = localStorage.getItem(`favouriteItem_${productItem.id}`);
    if (productItemFavourite) {
      const { isFavourite } = JSON.parse(productItemFavourite);
      setIsFavorite(isFavourite);
    }
  }, [productItem.id]);

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
