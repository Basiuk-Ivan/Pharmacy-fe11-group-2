import { Container, Typography, Grid, Button, Skeleton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../ProductCard/ProductCard';
import Bread from '../../Bread';

import { openModalAddtoCart, openModalRemoveAll } from '../../../redux/slice/favouriteItems';
import { request } from '../../../tools/request';
import ModalWindow from '../../ModalWindow';
import { closeModalNotAvailable, openModalNotAvailable } from '../../../redux/slice/cartItems';

const FavouriteBlock = props => {
  const [products, setProducts] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const dispatch = useDispatch();
  const isOpenedCartModalNotAvailable = useSelector(state => state.itemCards.isOpenedCartModalNotAvailable);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (favoriteItems.length > 0) {
          const favoriteIds = favoriteItems.map(item => item.id);

          const { result } = await request({
            url: '',
            method: 'GET',
            params: { _id: favoriteIds }
          });

          const { data } = result;

          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [favoriteItems]);

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
    const product = products.find(productItem => productItem.quantity < 1);
    if (product) {
      dispatch(openModalNotAvailable());
    } else {
      dispatch(openModalAddtoCart());
    }
  };

  const handleCloseModalNotAvailable = () => {
    dispatch(closeModalNotAvailable());
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
      <ModalWindow
        mainText="В улюблених є товари, кількість яких відсутня. Для додавання товарів в корзину, будь-ласка видаліть відсутній товар"
        handleClick={() => {}}
        handleClose={handleCloseModalNotAvailable}
        isOpened={isOpenedCartModalNotAvailable}
        actions={false}
      />
    </Container>
  );
};

export default FavouriteBlock;
