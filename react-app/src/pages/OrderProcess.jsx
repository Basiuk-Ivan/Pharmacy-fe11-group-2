import { Container, Typography } from '@mui/material';
import Bread from '../components/Favourite/Bread';
import Advantages from '../components/orderProcess/Advantages';
import ContactsBlock from '../components/orderProcess/ContactsBlock/ContactsBlock';
import PaymentBlock from '../components/orderProcess/PaymentBlock/PaymentBlock';

const OrderProcess = () => (
  <Container>
    <Bread />
    <Typography
      variant="h4"
      sx={{
        mb: '30px'
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
