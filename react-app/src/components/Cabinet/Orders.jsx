import { Typography, Button, Grid, Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { getUserOrdersFromDB } from '../../utils/ActionsWithProduct/getUserOrdersFromDB.js';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userId = useSelector(state => state.user.id);

  useEffect(() => {
    const fetchData = async userId => {
      const { data } = await getUserOrdersFromDB(userId);
      console.log(data);
      setOrders(data)
    };

    fetchData(userId);
  }, [orders]);

  return (
      <>
          {!!orders && orders.map(order => (
            <Stack key={order.id}>
              <Box>Сума замовлення</Box>
              <Box>{order.totalPrice}</Box>
            </Stack>))}
      </>
  );
};

export default Orders;

{ /* {[1, 2, 3].map(id => ( */ }
{ /*    <Grid container key={id}> */ }
{ /*        <Grid item md={3}> */ }
{ /*            /!* <img src={`./orderprocessTest/${id}.png`} alt="" /> *!/ */ }
{ /*        </Grid> */ }
{ /*        <Grid item md={6}> */ }
{ /*            <Typography sx={{ textAlign: 'left' }}>Велсон таблетки 30 шт.</Typography> */ }
{ /*        </Grid> */ }
{ /*        <Grid item md={3}> */ }
{ /*            <Typography sx={{ textAlign: 'left' }}>108 грн.</Typography> */ }
{ /*        </Grid> */ }
{ /*    </Grid> */ }
{ /* ))} */ }
