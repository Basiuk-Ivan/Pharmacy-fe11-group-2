import { Button, Grid, Container } from '@mui/material';
import PaymentMethodForm from './PaymentMethodForm/PaymentMethodForm';
import TotalAmountForm from './TotalAmountForm/TotalAmountForm';

const PaymentBlock = () => (
  <Container>
    <Grid
      container
      sx={{
        mt: '63px',
      }}
      justifyContent={{ xs: 'center', md: 'space-between' }}
      marginTop={{ xs: '30px' }}
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
        marginTop={{ xs: '30px' }}
      >
        <TotalAmountForm />
      </Grid>
    </Grid>

    <Grid container justifyContent={{ xs: 'center', md: 'flex-start' }}>
      <Grid item md={7} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          type="submit"
          form="contacts"
          sx={{
            backgroundColor: '#2FD3AE',
            borderRadius: 50,
            mt: '50px',
          }}
        >
          Підтвердити замовлення
        </Button>
      </Grid>
    </Grid>
  </Container>
);

export default PaymentBlock;
