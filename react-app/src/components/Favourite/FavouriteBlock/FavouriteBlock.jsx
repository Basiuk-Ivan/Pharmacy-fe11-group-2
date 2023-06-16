import { Container, Typography, Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../ProductCard/ProductCard';
import Bread from '../../Bread';
import { addItem } from '../../../redux/slice/cartItems';
import { addToCartLocalStorage } from '../../../utils/LocalStore/addToCartLocalStorage';
import { openModal } from '../../../redux/slice/favouriteItems';

const FavouriteBlock = () => {
  const [products, setProducts] = useState([]);

  const cartItems = useSelector(state => state.itemCards);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);

  const dispatch = useDispatch();
  // const isInCart = false;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const favoriteString = localStorage.getItem('favouriteItems');

        if (favoriteItems) {
          const favouriteItems = JSON.parse(favoriteString);

          if (favouriteItems.length > 0) {
            const favoriteIds = favouriteItems.map(item => item.id);
            const url = `http://localhost:3004/api/product/?_id=${favoriteIds}`;
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const { prods } = await response.json();

            setProducts(prods);
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line arrow-body-style
    const updatedProducts = products.filter(item => {
      return favoriteItems.find(favoriteItem => favoriteItem.id === item.id);
    });

    setProducts(updatedProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteItems]);

  const delFromFav = () => {
    dispatch(openModal());
  };

  const handleAddToCart = items => {
    items.forEach(element => {
      if (!cartItems.items.find(item => item.id === element.id)) {
        dispatch(addItem(element));
        addToCartLocalStorage(element);
      }
    });
  };

  return (
    <Container
      disableGutters
      sx={{
        mt: '140px',
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
                onClick={() => delFromFav()}
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
              <Grid item key={item.id}>
                <ProductCard
                  productItem={item}
                  // isInCart={isInCart}
                />
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
