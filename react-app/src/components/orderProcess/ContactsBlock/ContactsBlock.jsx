import { Grid } from '@mui/material';
import ContactsForm from './ContactsForm/ContactsForm';
import OrderList from './OrderList/OrderList';

const ContactsBlock = ({ products, formik }) => {
  return (
    <Grid
      container
      justifyContent={{ xs: 'center', md: 'space-between' }}
      sx={{
        gap: '30px'
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
          minHeight: '500px'
        }}
      >
        <ContactsForm products={products} formik={formik} />
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
        <OrderList products={products} />
      </Grid>
    </Grid>
  );
};

export default ContactsBlock;
