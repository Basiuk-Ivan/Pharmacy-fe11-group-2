import { Box, Typography, Stack } from '@mui/material';
import { ProductSelector } from './components/Items/ProductSelector';
import { PharmacySelector } from './components/Items/PharmacySelector';
import { OrderForm } from './components/Items/OrderForm';
import { ReceiveProduct } from './components/Items/ReceiveProduct';
import { SliderWorks } from './components/SliderWork';
import { howWeWorkStyled, wrapperForItemStyled, stack } from './style';

const HowWeWork = () => (
  <Box>
    <Box>
      <Typography fontFamily="Roboto" component="div" sx={howWeWorkStyled}>
        Як ми працюємо?
      </Typography>
    </Box>
    <Box sx={wrapperForItemStyled}>
      <SliderWorks />
      <Stack direction="row" sx={stack} flexWrap="wrap">
        <ProductSelector />
        <PharmacySelector />
        <OrderForm />
        <ReceiveProduct />
      </Stack>
    </Box>
  </Box>
);

export default HowWeWork;
