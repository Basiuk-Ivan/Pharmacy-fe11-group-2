import { Typography, Button, Grid, Container, Stack, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserOrdersFromDB } from '../../utils/ActionsWithProduct/getUserOrdersFromDB';
import { formatDate } from '../../utils/ActionsWithProduct/formatDate';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userId = useSelector(state => state.user.id);

  useEffect(() => {
    const fetchData = async userID => {
      const { data } = await getUserOrdersFromDB(userID);
      setOrders(data);
    };

    fetchData(userId);
  }, []);

  return (
    <Box sx={{ minHeight: '1000px' }}>
      {!!orders && orders.reverse().map(order => {
        const formatedDate = formatDate(order.createdAt);
        return (
          <Stack
            key={order.id}
            direction="column"
            spacing={1}
            sx={{ mb: 3,
              border: '1px solid green',
              backgroundColor: '#f7fafb',
              borderRadius: '10px',
              p: 1 }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography gutterBottom variant="h6" sx={{ flexGrow: 3 }}>
                Ваше замовлення
              </Typography>
              <Typography gutterBottom variant="body1">
                від {formatedDate}
              </Typography>
            </Stack>
            <Stack key={order.id} direction="row" justifyContent="space-between" spacing={2}>
              <Typography gutterBottom variant="body1" sx={{ fontWeight: 500, p: '5px', borderRadius: '10px', backgroundColor: '#2fd3ae', color: '#ffffff' }}>
                Вартість замовлення {order.totalPrice} грн.
              </Typography>
            </Stack>
            {order.products.map(productItem => {
              return (
                <Grid container key={productItem.id} sx={{ mb: 1, border: '1px solid green', p: 1 }}>
                  <Grid item xs={12} md={2}>
                    <img src={productItem.img[0]} alt="goods" width="120px" />
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Stack
                      direction="column"
                      spacing={1}
                      sx={{ mb: 1, p: 1 }}
                    >
                      <Typography gutterBottom variant="body1" sx={{ fontWeight: 500 }}>
                        {productItem.name}
                      </Typography>
                      <Typography gutterBottom variant="body1" sx={{ fontWeight: 500 }}>
                        Кількість:  {productItem.quantity} од.
                      </Typography>
                      <Typography gutterBottom variant="body1" sx={{ fontWeight: 500 }}>
                        Ціна за од.: {productItem.price} грн.
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>);
            })}
          </Stack>
        );
      }
      )}
    </Box>
  );
};

export default Orders;
