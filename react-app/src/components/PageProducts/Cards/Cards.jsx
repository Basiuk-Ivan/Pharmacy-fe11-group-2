import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import ProductCard from '../../ProductCard';
import { cardsWrapperStyled, cardWrapperStyled } from './style';

function Cards() {
  const { products } = useSelector(state => state.products);
  const products1 = products.slice(0);
  products1.push(...products1, ...products1, ...products1);
  products1.push(...products1, ...products1, ...products1);

  const { numPage } = useSelector(state => state.numPage);
  const isInCart = false;

  return (
    <Box id="cardsWrapper" sx={cardsWrapperStyled}>
      {products1.slice((numPage - 1) * 4, (numPage - 1) * 4 + 4).map(item => (
        <Box id="cardWrapper" key={item.id} sx={cardWrapperStyled}>
          <ProductCard productItem={item} isInCart={isInCart} />
        </Box>
      ))}
    </Box>
  );
}

export default Cards;
