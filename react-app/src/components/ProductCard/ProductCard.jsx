import { Card, CardMedia } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation } from 'react-router-dom';
import { FavoriteCheckbox } from './components/FavoriteCheckbox';
import { theme } from '../../tools/muiTheme';
import { CardContentBody } from './components/CardContentBody/CardContentBody';
import { wrapForCardStyles, cardMediaStyles } from './style';

const ProductCard = ({ productItem, isInCart }) => {
  const cardWrapStyles = wrapForCardStyles(isInCart);
  const cardMediaStyle = cardMediaStyles(isInCart);

  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <NavLink to={`${pathname}/${productItem?.id}`}>
        <Card sx={cardWrapStyles}>
          <FavoriteCheckbox productItem={productItem} isInCart={isInCart} />
          <CardMedia sx={cardMediaStyle} image={productItem?.img[0]} title="productImage" />
          <CardContentBody productItem={productItem} isInCart={isInCart} />
        </Card>
      </NavLink>
    </ThemeProvider>
  );
};

export default ProductCard;
