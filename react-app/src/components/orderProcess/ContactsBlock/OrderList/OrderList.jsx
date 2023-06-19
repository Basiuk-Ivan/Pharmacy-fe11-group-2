import { useEffect, useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { roundPrice } from '../../../../utils/ActionsWithProduct/roundPrice';
import { request } from '../../../../tools/request';

const OrderList = () => {
  const [products, setProducts] = useState([]);
  const productItemCart = useSelector(state => state.itemCards.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (productItemCart.length > 0) {
          const cartIds = productItemCart.map(item => item.id).join(',');

          const { result } = await request({
            url: '',
            method: 'GET',
            params: { _id: cartIds }
          });

          const { data } = result;

          const combinedArray = productItemCart.map(item1 => {
            const arr2 = data.find(item2 => item2.id === item1.id);
            return { ...item1, ...arr2, quantity: item1.quantity };
          });

          setProducts(combinedArray);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [productItemCart]);
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
        {products.map(el => {
          const currentPrice = roundPrice(el) * el.quantity;
          return (
            <Grid container key={el.id} alignItems="center">
              <Grid item md={3}>
                <img src={`${el.img[0]}`} width="70px" height="60px" alt="" />
              </Grid>
              <Grid item md={5}>
                <Typography sx={{ textAlign: 'left' }}>{`${el.name}`}</Typography>
              </Grid>
              <Grid item md={1}>
                <Typography
                  sx={{
                    textAlign: 'center',
                    borderRadius: '50px',
                    padding: '2px',
                    backgroundColor: '#2fd3ae'
                  }}
                >
                  {`${el.quantity}`}
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography sx={{ textAlign: 'center' }}>{`${currentPrice} грн.`}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default OrderList;
