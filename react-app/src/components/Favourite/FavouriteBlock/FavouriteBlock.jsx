import { Container, Typography, Grid, Button, Skeleton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../ProductCard/ProductCard';
import Bread from '../../Bread';

import { openModalAddtoCart, openModalRemoveAll } from '../../../redux/slice/favouriteItems';
import { request } from '../../../tools/request';

const FavouriteBlock = props => {
  const [products, setProducts] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const { favoriteItems } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const favoriteString = localStorage.getItem('favouriteItems');

        if (favoriteItems && favoriteItems.length > 0) {
          const favouriteItems = JSON.parse(favoriteString);

          if (favouriteItems.length > 0) {
            const favoriteIds = favouriteItems.map(item => item.id).join(',');

            const { result } = await request({
              url: '',
              method: 'GET',
              params: { _id: favoriteIds }
            });

            const { data } = result;

            setProducts(data);
          }
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const updatedProducts = products.filter(item => {
      return favoriteItems.find(favoriteItem => favoriteItem.id === item.id);
    });

    setProducts(updatedProducts);
  }, [favoriteItems]);

  const delFromFav = () => {
    dispatch(openModalRemoveAll());
  };

  const addAlltoCart = () => {
    dispatch(openModalAddtoCart());
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
      {showSkeleton ? (
        <Stack direction="row" spacing={2}>
          <Box>
            <Skeleton variant="rectangular" width={220} height={430} />
          </Box>
          <Box>
            <Skeleton variant="rectangular" width={220} height={430} />
          </Box>
          <Box>
            <Skeleton variant="rectangular" width={220} height={430} />
          </Box>
          <Box>
            <Skeleton variant="rectangular" width={220} height={430} />
          </Box>
          <Box>
            <Skeleton variant="rectangular" width={220} height={430} />
          </Box>
        </Stack>
      ) : products.length > 0 ? (
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
                fontFamily: 'Roboto, sans-serif',
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
                  fontFamily: 'Roboto, sans-serif',
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
                onClick={addAlltoCart}
                component={Link}
                sx={{
                  backgroundColor: '#2FD3AE',
                  borderRadius: 50,
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#FFFFFF'
                }}
              >
                Додати все до кошика
              </Button>
            </Stack>
          </Stack>
          <Grid container spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            {products.map(item => (
              <Grid item key={item.id}>
                <ProductCard productItem={item} />
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
