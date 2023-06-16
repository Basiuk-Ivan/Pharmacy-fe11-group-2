import { useEffect, useState } from 'react';

import { Typography, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const OrderList = () => {
  const [products, setProducts] = useState([]);

  const productItemCart = useSelector(state => state.itemCards.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cartString = localStorage.getItem('cartItems');

        if (cartString) {
          const cartItems = JSON.parse(cartString);

          if (cartItems.length > 0) {
            const cartIds = cartItems.map(item => item.id);
            const url = `http://localhost:3004/api/product/?_id=${cartIds}`;
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
  }, []);

  return (
    <Container disableGutters>
      <Typography
        sx={{
          margin: '40px 0 20px 0',
          fontFamily: 'Raleway, sans-serif',
          color: '#4F4F4F',
          fontWeight: '700',
          fontSize: '24px',
          width: '100%'
        }}
      >
        Ваше замовлення
      </Typography>
      <Grid container sx={{ overflowY: 'auto', maxHeight: '300px' }}>
        {products.map(el => (
          <Grid container key={el.id} alignItems="center">
            <Grid item md={3}>
              <img src={`${el.img[0]}`} width="70px" height="60px" alt="" />
            </Grid>
            <Grid item md={6}>
              <Typography sx={{ textAlign: 'left' }}>{`${el.name}`}</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography sx={{ textAlign: 'center' }}>{`${el.price} грн.`}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OrderList;
