import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Typography, Stack, Button, Box, Grid, Rating, ButtonBase, Checkbox } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { addToFavouriteLocalStorage } from '../../../utils/LocalStore/addToFavouriteLocalStorage';
import { removeFromFavouriteLocalStorage } from '../../../utils/LocalStore/removeFromFavouriteLocalStorage';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../../redux/slice/favouriteItems';
import VerticalImgTabPanel from '../VerticalImgTabPanel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ProductCardMainBlock = ({ productItem }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(2);
  const [activeSubstance, setActiveSubstance] = useState('');

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const arr = productItem.activeSubstance;
    setActiveSubstance(arr.join(', '));
    setValue(Math.round(Number(productItem.ratingTotal) / Number(productItem.ratingClick)));
  }, [productItem.activeSubstance, productItem.ratingClick, productItem.ratingTotal]);

  const handleFavoriteClick = event => {
    event.preventDefault();
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addToFavouriteLocalStorage(productItem);
      dispatch(addToFavouriteItems(productItem));
    } else {
      removeFromFavouriteLocalStorage(productItem);
      dispatch(deleteFromFavouriteItems(productItem.id));
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Grid container sx={{ rowGap: '15px' }}>
      <Grid item xs={12} sm={12} lg={5}>
        <VerticalImgTabPanel productItem={productItem} />
      </Grid>

      <Grid item xs={12} sm={7} lg={4}>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          <Grid item lg={7} sx={{ padding: '0 10px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: '36px',
                flexWrap: 'wrap',
                rowGap: '10px',
                columnGap: '3px'
              }}
            >
              <Box
                sx={{
                  '& > legend': { mt: 2 }
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '18px' } }}
                />
              </Box>
              <Typography
                sx={{ fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '14px' }, color: '#2FD3AE' }}
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
              <Typography
                variant="h4"
                sx={{
                  fontSize: '14px',
                  color: '#333333',
                  lineHeight: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  fontWeight: 700,
                  mb: '30px'
                }}
              >
                Характеристики
              </Typography>
              <Box>
                <Grid container sx={{ rowGap: '5px' }}>
                  <Grid item xs={12} sx={{ backgroundColor: '#F7FAFB', mb: '5px' }}>
                    <Grid
                      container
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      gap={0.5}
                      sx={{ ml: '10px' }}
                    >
                      <Grid item>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Typography
                            component="span"
                            variant="body1"
                            sx={{
                              width: '4px',
                              height: '4px',
                              mr: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#F2C94C'
                            }}
                          />

                          <Typography
                            component="span"
                            variant="body1"
                            sx={{ fontSize: '14px', color: '#7B818C' }}
                          >
                            Виробник:
                          </Typography>
                        </Stack>
                      </Grid>

                      <Grid item sx={{ fontSize: '14px' }}>
                        {productItem?.manufacturer}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sx={{ mb: '5px' }}>
                    <Grid
                      container
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      gap={0.5}
                      sx={{ ml: '10px' }}
                    >
                      <Grid item>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Typography
                            component="span"
                            variant="body1"
                            sx={{
                              width: '4px',
                              height: '4px',
                              mr: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#F2C94C'
                            }}
                          />

                          <Typography
                            component="span"
                            variant="body1"
                            sx={{ fontSize: '14px', color: '#7B818C' }}
                          >
                            Діюча речовинаі:
                          </Typography>
                        </Stack>
                      </Grid>

                      <Grid item sx={{ fontSize: '14px' }}>
                        {activeSubstance}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sx={{ backgroundColor: '#F7FAFB', mb: '5px' }}>
                    <Grid
                      container
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      gap={0.5}
                      sx={{ ml: '10px' }}
                    >
                      <Grid item>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Typography
                            component="span"
                            variant="body1"
                            sx={{
                              width: '4px',
                              height: '4px',
                              mr: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#F2C94C'
                            }}
                          />

                          <Typography
                            component="span"
                            variant="body1"
                            sx={{ fontSize: '14px', color: '#7B818C' }}
                          >
                            Термін придатності:
                          </Typography>
                        </Stack>
                      </Grid>

                      <Grid item sx={{ fontSize: '14px' }}>
                        {productItem?.bestBeforeDate}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5} lg={3} sx={{ width: '100%' }}>
        <Grid
          container
          sx={{
            paddingLeft: '30px',
            backgroundColor: '#F7FAFB',
            paddingTop: '65px',
            mb: '10px'
          }}
        >
          <Grid item xs={12} lg={9} sx={{ paddingLeft: '0px' }}>
            <Typography variant="h5" gutterBottom sx={{ paddingLeft: '0px' }}>
              {productItem.discount > 0
                ? `${productItem.price * ((100 - productItem.discount) / 100)} ГРН.`
                : `${productItem.price} ГРН.`}
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

          <Box sx={{ position: 'relative', mb: '14px' }}>
            <ButtonBase
              sx={{
                width: '20px',
                padding: '0',
                height: '14px',
                position: 'absolute',
                top: '10px',
                left: '-5px',
                backgroundColor: '#2FD3AE',
                fontSize: '18px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: '"Roboto", "san-serif"'
              }}
              onClick={handleDecrement}
            >
              -
            </ButtonBase>
            <Box
              sx={{
                padding: '4px 20px',
                borderRadius: '50px',
                backgroundColor: '#ffffff',
                // height:'32px',
                textAlign: 'center',
                fontFamily: '"Roboto", "san-serif"'
              }}
            >
              {quantity}
            </Box>
            <ButtonBase
              onClick={handleIncrement}
              sx={{
                position: 'absolute',
                width: '20px',
                height: '14px',
                top: '10px',
                right: '-5px',
                padding: 0,
                margin: 0,
                backgroundColor: '#DD8888',
                fontSize: '14px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              +
            </ButtonBase>
          </Box>
        </Grid>

        <Typography
          variant="h4"
          sx={{
            paddingLeft: '30px',
            fontSize: '14px',
            color: '828282',
            textDecoration: 'line-through'
          }}
        >
          Актуальна ціна
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingLeft: '30px',
            fontSize: '14px',
            fontWeight: 700,
            color: '#DD8888',
            textDecoration: 'line-through'
          }}
        >
          {productItem.price} ГРН.
        </Typography>

        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: '12px' }}>
          <Button
            variant="outlined"
            onClick={handleDecrement}
            sx={{
              margin: '25px 0 17px',
              color: '#525A68',
              borderRadius: '50px',
              width: { xs: '200px', sm: '240px' }
            }}
          >
            Купити в один клік
          </Button>
          <Button
            variant="outlined"
            onClick={handleDecrement}
            sx={{
              width: '158px',
              color: '#ffffff',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: '#2FD3AE',
              '&:hover': {
                color: '#2FD3AE'
              }
            }}
          >
            До корзини
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductCardMainBlock;
