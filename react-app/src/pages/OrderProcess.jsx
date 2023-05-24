import { Container, Typography } from '@mui/material';
import Advantages from '../components/orderProcess/Advantages';
import ContactsBlock from '../components/orderProcess/ContactsBlock/ContactsBlock';
import PaymentBlock from '../components/orderProcess/PaymentBlock/PaymentBlock';

const handlePaymentMethod = value => value;

const OrderProcess = () => (
  <Container>
    <Typography
      variant="h4"
      sx={{
        mb: '30px'
      }}
    >
      Оформити замовлення
    </Typography>
    <ContactsBlock />
    <PaymentBlock handlePaymentMethod={handlePaymentMethod} />
    <Advantages />
  </Container>
);

export default OrderProcess;
