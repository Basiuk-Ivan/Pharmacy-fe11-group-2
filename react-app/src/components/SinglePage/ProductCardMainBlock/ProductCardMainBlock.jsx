import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Stack, Button, Box, Grid, Rating, Checkbox } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { NavLink } from 'react-router-dom';
import { addToFavouriteLocalStorage } from '../../../utils/LocalStore/addToFavouriteLocalStorage';
import { removeFromFavouriteLocalStorage } from '../../../utils/LocalStore/removeFromFavouriteLocalStorage';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../../redux/slice/favouriteItems';
import VerticalImgTabPanel from '../VerticalImgTabPanel';
import { addToCart } from '../../../redux/slice/cartItems';
import { updateRating } from '../../../utils/ActionsWithProduct/updateRating';
import { addToCartLocalStorage } from '../../../utils/LocalStore/addToCartLocalStorage';
import { roundRating } from '../../../utils/ActionsWithProduct/roundRating';
import { roundPrice } from '../../../utils/ActionsWithProduct/roundPrice';
import {
  actualPriceValueStyle,
  actualPriceStyle,
  bulletStyle,
  charactersStyle,
  mainBlockStyle,
  btnAddToCartStyle,
  linkToCartStyle,
  priceBlockStyle
} from './style';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ProductCardMainBlock = ({ productItem }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  const [activeSubstance, setActiveSubstance] = useState('');
  const [mainPrice, setMainPrice] = useState('');
  const [ratingClick, setRatingClick] = useState(true);
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  console.log('favoriteItems:', favoriteItems);
  const cartItems = useSelector(state => state.itemCards.items);

  useEffect(() => {
    const favoriteString = localStorage.getItem('favouriteItems');

    if (favoriteString) {
      const favouriteItems = JSON.parse(favoriteString);

      const isItemFavorite = favouriteItems.some(elem => elem.id === productItem.id);
      setIsFavorite(isItemFavorite);
    }
  }, [productItem.id]);

  useEffect(() => {
    const productItemIndex = cartItems.findIndex(item => item.id === productItem.id);
    if (productItemIndex !== -1) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartItems, productItem.id]);

  useEffect(() => {
    const arr = productItem.activeSubstance;
    setActiveSubstance(arr.join(', '));

    const roundedRating = roundRating(productItem);
    setValue(roundedRating);

    const roundedPrice = roundPrice(productItem);
    setMainPrice(roundedPrice);
  }, [productItem]);

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

  const handleAddToCart = product => {
    dispatch(addToCart({ id: productItem.id }));
    addToCartLocalStorage(product);
  };

  return (
    <Grid container sx={{ rowGap: '15px', mt: '10px' }}>
      <Grid item xs={12} sm={12} lg={5}>
        <VerticalImgTabPanel productItem={productItem} />
      </Grid>

      <Grid item xs={12} sm={7} lg={4} sx={{ bgcolor: '#ffffff' }}>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          <Grid item lg={7} sx={{ padding: '0 10px' }}>
            <Box sx={mainBlockStyle}>
              <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    if (ratingClick && newValue > 0) {
                      updateRating(productItem, newValue);
                      setRatingClick(false);
                    }
                  }}
                  sx={{ fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '18px' } }}
                  disabled={!ratingClick}
                />
              </Box>
              <Typography
                color={productItem?.quantity > 0 ? '#2FD3AE' : '#910808'}
                sx={{ fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '14px' }, fontWeight: '500' }}
              >
                {productItem?.quantity > 0 ? 'Є в наявності' : 'Товар відсутній'}
              </Typography>
              <Box sx={{ display: 'flex', gap: '3px' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '14px' },
                    color: '#7B818C'
                  }}
                >
                  Артикул:
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '14px' },
                    color: '#333333'
                  }}
                >
                  {productItem?.article}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: '100%' }}>
              <Typography variant="h4" sx={charactersStyle}>
                Характеристики
              </Typography>
              <Box>
                <Grid container sx={{ rowGap: '5px' }}>
                  {[
                    { title: 'Виробник', itemValue: `${productItem?.manufacturer}` },
                    { title: 'Діюча речовина', itemValue: `${activeSubstance}` },
                    { title: 'Термін придатності', itemValue: `${productItem?.bestBeforeDate}` }
                  ].map(({ title, itemValue }) => (
                    <Grid key={title} item xs={12} sx={{ mb: '5px' }}>
                      <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        gap={0.5}
                        sx={{ ml: '10px' }}
                      >
                        <Grid item>
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <Typography component="span" variant="body1" sx={bulletStyle} />
                            <Typography
                              component="span"
                              variant="body1"
                              sx={{ fontSize: '14px', color: '#7B818C' }}
                            >
                              {title}:
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item fontFamily="Roboto" sx={{ fontSize: '14px' }}>
                          {itemValue}
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
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

        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: '12px' }}>
          <Stack>
            {!isInCart ? (
              <Button
                variant="outlined"
                onClick={() => handleAddToCart(productItem)}
                disabled={productItem.quantity < 1}
                sx={btnAddToCartStyle}
              >
                Додати до корзини
              </Button>
            ) : (
              <Stack alignItems="center">
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ color: '#2FD3AE', fontSize: '16px', m: '10px 0' }}
                >
                  Товар додано до корзини
                </Typography>
                <NavLink to="/cart">
                  <Button variant="outlined" sx={linkToCartStyle}>
                    Перейти до корзини
                  </Button>
                </NavLink>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductCardMainBlock;
