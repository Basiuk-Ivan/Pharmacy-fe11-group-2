import { Box, Typography, Stack } from '@mui/material';
import { ProductSelector } from './Items/ProductSelector';
import { PharmacySelector } from './Items/PharmacySelector';
import { OrderForm } from './Items/OrderForm';
import { ReceiveProduct } from './Items/ReceiveProduct';
import { howWeWorkStyled, wrapperForItemStyled, stack } from './style';

const HowWeWork = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={howWeWorkStyled}>
        Як ми працюємо?
      </Typography>
    </Box>
    <Box sx={wrapperForItemStyled}>
      <Stack direction="row" spacing={2} sx={stack}>
        <ProductSelector />
        <PharmacySelector />
        <OrderForm />
        <ReceiveProduct />
      </Stack>
    </Box>
  </Box>
);

export default HowWeWork;
