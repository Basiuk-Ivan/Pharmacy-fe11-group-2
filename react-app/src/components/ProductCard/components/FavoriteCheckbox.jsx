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
import { addFavorite } from '../../../utils/ActionsWithProduct/addFavorite';
import { putFavoritesToFavoritesDB } from '../../../utils/ActionsWithProduct/putFavoritesToFavoritesDB';
import { removeFavorite } from '../../../utils/ActionsWithProduct/removeFavorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const FavoriteCheckbox = ({ isInCart, productItem }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);
  const favoriteStoreId = useSelector(state => state.user.favoriteStoreId);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const productItemIndex = favoriteItems.findIndex(item => item.id === productItem.id);
    if (productItemIndex !== -1) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteItems, productItem.id]);

  const handleFavoriteClick = async event => {
    event.preventDefault();
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      dispatch(addToFavouriteItems(productItem.id));
      if (isAuth) {
        const favorites = addFavorite(favoriteItems, productItem);
        await putFavoritesToFavoritesDB(favoriteStoreId, favorites);
      } else {
        addToFavouriteLocalStorage(productItem);
      }
    } else {
      dispatch(deleteFromFavouriteItems(productItem.id));
      if (isAuth) {
        const favorites = removeFavorite(favoriteItems, productItem);
        await putFavoritesToFavoritesDB(favoriteStoreId, favorites);
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
