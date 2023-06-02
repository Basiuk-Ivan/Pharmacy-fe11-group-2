import { useSelector } from 'react-redux';

import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ProductCard from '../../ProductCard';
import { cardsWrapperStyled, cardWrapperStyled } from './style';

function Cards() {
  const { products } = useSelector(state => state.products);
  const { numPage } = useSelector(state => state.numPage);
  const isInCart = true;

  return (
    <Box id="cardsWrapper" sx={cardsWrapperStyled}>
      {products.slice((numPage - 1) * 4, (numPage - 1) * 4 + 4).map(item => (
        <Box id="cardWrapper" key={item.id} sx={cardWrapperStyled}>
          <NavLink to={item.id}>
            <ProductCard productItem={item} isInCart={isInCart} />
          </NavLink>
        </Box>
      ))}
    </Box>
  );
}

export default Cards;
