import { Container, Typography } from '@mui/material';
import Bread from '../components/Bread';
import Advantages from '../components/orderProcess/Advantages';
import ContactsBlock from '../components/orderProcess/ContactsBlock/ContactsBlock';
import PaymentBlock from '../components/orderProcess/PaymentBlock/PaymentBlock';

const OrderProcess = () => (
  <Container sx={{
    mt: '140px'
  }}
  >
    <Bread />
    <Typography
      sx={{
        mb: '20px',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 700,
        fontSize: '36px',
        color: '#2E3A59',
      }}
    >
      Оформити замовлення
    </Typography>
    <ContactsBlock />
    <PaymentBlock />
    <Advantages />
  </Container>
);

export default OrderProcess;
