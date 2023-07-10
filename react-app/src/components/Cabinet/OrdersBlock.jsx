import { Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import Orders from './Orders';
import { getUserOrdersFromDB } from '../../utils/ActionsWithProduct/getUserOrdersFromDB';
import { ThemeProvider } from '@mui/material/styles';
import { noReviewsStyles } from './style';
import { theme as muiTheme } from '../../tools/muiTheme';

const OrdersBlock = () => {
  const [isLoading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const userId = useSelector(state => state.user.id);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async userID => {
      const { data } = await getUserOrdersFromDB(userID);
      setOrders(data);
    };

    fetchData(userId);
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ minHeight: '500px', mt: '40px' }}>
        {isLoading && <Loading />}
        {!isLoading &&
        <Box>
          {!!orders && orders.reverse().map((order, index) => <Orders
            key={`${order.id}-${index}`}
            order={order}
          />)}
          {orders.length < 1 && <Typography sx={noReviewsStyles}>Оформлені замовлення відсутні</Typography>}
        </Box>}
      </Box>
    </ThemeProvider>
  );
};

export default OrdersBlock;
