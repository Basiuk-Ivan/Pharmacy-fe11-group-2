import { Typography } from '@mui/material';
import ProductCard from '../../../components/ProductCard';

export const IsProductsCart = ({ products, isInCart }) => (
  <>
    {products.length > 0 ? (
      <>
        {products.map(item => (
          <ProductCard key={item.id} productItem={item} isInCart={isInCart} />
        ))}
      </>
    ) : (
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: 24,
          fontWeight: 400,
          mt: '100px',
          mb: '400px'
        }}
      >
        Додайте товар в корзину для відображення на цій сторінці
      </Typography>
    )}
  </>
);
