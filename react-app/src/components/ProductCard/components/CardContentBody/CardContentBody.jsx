import { NavLink, useLocation } from 'react-router-dom';
import { CardContent, Typography, Box } from '@mui/material';
import { RatingCard } from './components/RatingCard';
import { ProductDetails } from './components/ProductDetails';
import { PriceCard } from './components/PriceCard/PriceCard';
import { cardContentStyles, productNameStyles, productDayStyles } from '../../style';

export const CardContentBody = ({ isInCart, productItem }) => {
  const MAX_TITLE_LENGTH = 35;
  const { pathname } = useLocation();

  const cardContentStyle = cardContentStyles(isInCart);
  const productNameStyle = productNameStyles(isInCart);

  return (
    <CardContent sx={cardContentStyle}>
      <Box sx={{ flex: '1 1 50%' }}>
        <RatingCard productItem={productItem} />
        <NavLink to={`${pathname}/${productItem?.id}`}>
          <Typography gutterBottom variant="h5" component="p" sx={productNameStyle}>
            <span title={productItem?.name}>
              {productItem?.name.length > MAX_TITLE_LENGTH
                ? `${productItem?.name.slice(0, MAX_TITLE_LENGTH)}...`
                : productItem?.name}
            </span>
          </Typography>
        </NavLink>
        <ProductDetails productItem={productItem} isInCart={isInCart} />
      </Box>
      <PriceCard productItem={productItem} isInCart={isInCart} />
      {productItem.productOfTheDay === true ? (
        <Typography variant="span" gutterBottom sx={productDayStyles}>
          Товар дня
        </Typography>
      ) : null}
    </CardContent>
  );
};
