import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import ProductCard from '../../ProductCard';
import { cardsWrapperStyled, cardWrapperStyled } from './style';

function Cards() {
  const { products } = useSelector(state => state.products);

  const isInCart = false;

  return (
    <Box id="cardsWrapper" sx={cardsWrapperStyled}>
      {products.map(item => (
        <Box id="cardWrapper" key={item.id} sx={cardWrapperStyled}>
          <ProductCard productItem={item} isInCart={isInCart} />
        </Box>
      ))}
    </Box>
  );
}

export default Cards;
