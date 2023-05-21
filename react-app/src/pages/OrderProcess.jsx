import {
  Button, Grid, Container, Typography
} from '@mui/material';
import Advantages from '../components/orderProcess/Advantages';
import ContactsForm from '../components/orderProcess/ContactsForm';
import OrderList from '../components/orderProcess/OrderList';
import PaymentMethodForm from '../components/orderProcess/PaymentMethodForm';
import TotalAmountForm from '../components/orderProcess/TotalAmountForm';

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
    <Grid
      container
      sx={{
        justifyContent: 'space-between'
      }}
    >
      <Grid
        item
        md={7}
        sx={{
          border: '1px solid white',
          borderRadius: '20px',
          boxShadow: '0px 10px 40px rgba(11, 54, 29, 0.05)',
          padding: '10px'
        }}
      >
        <ContactsForm />
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          border: '1px solid white',
          borderRadius: '20px',
          boxShadow: '0px 10px 40px rgba(11, 54, 29, 0.05)',
          padding: '10px'
        }}
      >
        <OrderList />
      </Grid>
    </Grid>

    <Grid
      container
      sx={{
        mt: '63px',
        justifyContent: 'space-between'
      }}
    >
      <Grid
        item
        md={7}
        sx={{
          border: '1px solid white',
          borderRadius: '20px',
          boxShadow: '0px 10px 40px rgba(11, 54, 29, 0.05)',
          padding: '10px',
          backgroundColor: 'white'
        }}
      >
        <PaymentMethodForm />
      </Grid>

      <Grid
        item
        md={4}
        sx={{
          border: '1px solid white',
          borderRadius: '20px',
          boxShadow: '0px 10px 40px rgba(11, 54, 29, 0.05)',
          backgroundColor: '#F7FAFB'
        }}
      >
        <TotalAmountForm />
      </Grid>
    </Grid>

    <Button
      variant="contained"
      type="submit"
      form="contacts"
      sx={{
        backgroundColor: '#2FD3AE',
        borderRadius: 50,
        mt: '50px'
      }}
    >
      Підтвердити замовлення
    </Button>

    <Advantages />
  </Container>
);

export default OrderProcess;
