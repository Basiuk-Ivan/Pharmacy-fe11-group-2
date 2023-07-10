import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import ContactsForm from './ContactsForm/ContactsForm';
import OrderList from './OrderList/OrderList';

const ContactsBlock = ({ products }) => {
  const cartItems = useSelector(state => state.itemCards.items);

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
          minHeight: cartItems.length === 2 ? '300px' : cartItems.length > 2 ? '500px' : undefined
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
        <OrderList products={products} />
      </Grid>
    </Grid>
  );
};

export default ContactsBlock;
