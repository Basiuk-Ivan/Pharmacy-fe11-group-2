import { Container, Typography, Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../ProductCard/ProductCard';
import Bread from '../../Bread';
import { fetchProductsData } from '../../../redux/slice/productsSlice';
import { addItem } from '../../../redux/slice/cartItems';
import { addToCartLocalStor } from '../../../utils/LocalStore/addToCartLocalStor';
import { removeFromFavouriteLocalStor } from '../../../utils/LocalStore/removeFromFavouriteLocalStor';
import { deleteFromFavouriteItems } from '../../../redux/slice/favouriteItems';

const FavouriteBlock = props => {
  const { products } = props;
  const cartItems = useSelector(state => state.itemCards);
  const dispatch = useDispatch();
  const isInCart = false;

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch, products.length]);

  const delFromFav = prods => {
    prods.forEach(el => {
      removeFromFavouriteLocalStor(el);
    });
    dispatch(deleteFromFavouriteItems('all'));
  };

  const handleAddToCart = items => {
    items.forEach(element => {
      if (!cartItems.items.find(item => item.id === element.id)) {
        dispatch(addItem(element));
        addToCartLocalStor(element);
      }
    });
  };

  return (
    <Container
      disableGutters
      sx={{
        mt: '20px',
        mb: '20px'
      }}
    >
      <Bread />
      {!!products.length > 0 ? (
        <>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mb: '20px'
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: '36px',
                color: '#2E3A59'
              }}
            >
              Обране
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <DeleteIcon color="success" />
              <Button
                variant="text"
                onClick={() => delFromFav(products)}
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#828282'
                }}
              >
                Очистити все
              </Button>
              <Button
                variant="contained"
                type="submit"
                form="contacts"
                onClick={() => handleAddToCart(products)}
                component={Link}
                to={{
                  pathname: '/cart'
                }}
                sx={{
                  backgroundColor: '#2FD3AE',
                  borderRadius: 50,
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#FFFFFF'
                }}
              >
                Додати все до кошика
              </Button>
            </Stack>
          </Stack>
          <Grid container spacing={2}>
            {products.map(item => (
              <Grid item md={2.4} key={item.id}>
                <ProductCard productItem={item} isInCart={isInCart} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 24,
            fontWeight: 400,
            mt: '100px',
            mb: '200px'
          }}
        >
          Додайте товар в обране для відображення на цій сторінці
        </Typography>
      )}
    </Container>
  );
};

export default FavouriteBlock;
