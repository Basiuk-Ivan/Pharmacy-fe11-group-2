import { Button, Grid } from '@mui/material';
import PaymentMethodForm from './PaymentMethodForm/PaymentMethodForm';
import TotalAmountForm from './TotalAmountForm/TotalAmountForm';

const PaymentBlock = () => (
  <>
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
  </>
);
export default PaymentBlock;
