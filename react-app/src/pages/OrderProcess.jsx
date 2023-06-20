import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import Bread from '../components/Bread';
import Advantages from '../components/orderProcess/Advantages';
import ContactsBlock from '../components/orderProcess/ContactsBlock/ContactsBlock';
import PaymentBlock from '../components/orderProcess/PaymentBlock/PaymentBlock';
import { request } from '../tools/request';

const OrderProcess = () => {
  const [products, setProducts] = useState([]);
  const productItemCart = useSelector(state => state.itemCards.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (productItemCart.length > 0) {
          const cartIds = productItemCart.map(item => item.id).join(',');

          const { result } = await request({
            url: '',
            method: 'GET',
            params: { _id: cartIds }
          });

          const { data } = result;

          const combinedArray = productItemCart.map(item1 => {
            const arr2 = data.find(item2 => item2.id === item1.id);
            return { ...item1, ...arr2, quantity: item1.quantity };
          });

          setProducts(combinedArray);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [productItemCart]);
  return (
    <Container
      sx={{
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
          color: '#2E3A59'
        }}
      >
        Оформити замовлення
      </Typography>
      <ContactsBlock products={products} />
      <PaymentBlock />
      <Advantages />
    </Container>
  );
};

export default OrderProcess;
