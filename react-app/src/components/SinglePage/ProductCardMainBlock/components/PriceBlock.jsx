import { Box, Checkbox, Grid, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { actualPriceStyle, actualPriceValueStyle, priceBlockStyle } from '../style';
import ButtonBlock from './ButtonBlock';
import { roundPrice } from '../../../../utils/ActionsWithProduct/roundPrice';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../../../redux/slice/favouriteItems';
import { addFavorite } from '../../../../utils/ActionsWithProduct/addFavorite.js';
import { putFavoritesToFavoritesDB } from '../../../../utils/ActionsWithProduct/putFavoritesToFavoritesDB';
import { addToFavouriteLocalStorage } from '../../../../utils/LocalStore/addToFavouriteLocalStorage';
import { removeFavorite } from '../../../../utils/ActionsWithProduct/removeFavorite';
import { removeFromFavouriteLocalStorage } from '../../../../utils/LocalStore/removeFromFavouriteLocalStorage';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const PriceBlock = ({ productItem }) => {
  const dispatch = useDispatch();
  const [mainPrice, setMainPrice] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const isAuth = useSelector(state => state.user.isAuth);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const favoriteStoreId = useSelector(state => state.user.favoriteStoreId);
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

  useEffect(() => {
    const roundedPrice = roundPrice(productItem);
    setMainPrice(roundedPrice);
  }, [productItem]);

  useEffect(() => {
    const productItemIndex = favoriteItems.findIndex(item => item.id === productItem.id);
    if (productItemIndex !== -1) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteItems, productItem.id]);

  return (
    <Grid item xs={12} sm={5} lg={3} sx={{ width: '100%' }}>
      <Grid container sx={priceBlockStyle}>
        <Grid item xs={12} lg={9} sx={{ paddingLeft: '0px' }}>
          <Typography variant="h5" gutterBottom sx={{ paddingLeft: '0px' }}>
            {productItem.discount > 0 ? `${mainPrice} ГРН. ` : `${productItem.price} ГРН.`}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box onClick={handleFavoriteClick}>
            <Checkbox
              {...label}
              icon={<FavoriteBorderOutlinedIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
              checked={isFavorite}
            />
          </Box>
        </Grid>
      </Grid>
      {productItem.price !== mainPrice && (
        <>
          <Typography variant="h4" sx={actualPriceStyle}>
            Актуальна ціна
          </Typography>
          <Typography variant="body2" sx={actualPriceValueStyle}>
            {productItem.price} ГРН.
          </Typography>
        </>
      )}
      <ButtonBlock productItem={productItem} />
    </Grid>
  );
};

export default PriceBlock;
