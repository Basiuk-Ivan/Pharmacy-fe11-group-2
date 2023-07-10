import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ProductData from './ProductData';
import { formatDate } from '../../utils/ActionsWithProduct/formatDate';
import { ordersValueStyles, ordersWrapperStyles } from './style';

const Orders = ({ order }) => {
  const [formatedDate, setFormatedDate] = useState();

  useEffect(() => {
    const formated = formatDate(order.createdAt);
    setFormatedDate(formated);
  }, []);

  return (
    <Stack direction="column" spacing={1} sx={ordersWrapperStyles}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Typography gutterBottom variant="h6" sx={{ flexGrow: 3 }}>
          Ваше замовлення
        </Typography>
        <Typography gutterBottom variant="body1">
          від {formatedDate}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography gutterBottom variant="body1" sx={ordersValueStyles}>
          Вартість замовлення {order.totalPrice} грн.
        </Typography>
      </Stack>
      {order.products.map((productItem, index) => <ProductData key={`${productItem.id}-${index}`} productItem={productItem} />)}
    </Stack>
  );
};

export default Orders;
