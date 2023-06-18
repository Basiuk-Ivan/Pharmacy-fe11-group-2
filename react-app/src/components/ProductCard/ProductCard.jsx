import { Card, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation } from 'react-router-dom';
import { FavoriteCheckbox } from './components/FavoriteCheckbox';
import { theme } from '../../tools/muiTheme';
import { CardContentBody } from './components/CardContentBody/CardContentBody';
import { wrapForCardStyles, boxForImg, imgStyles } from './style';

const ProductCard = ({ productItem, isInCart }) => {
  const { pathname } = useLocation();

  const cardWrapStyles = wrapForCardStyles(isInCart);

  return (
    <ThemeProvider theme={theme}>
      <Card sx={cardWrapStyles}>
        <NavLink to={`${pathname}/${productItem?.id}`}>
          <FavoriteCheckbox productItem={productItem} isInCart={isInCart} />
          <Box sx={boxForImg}>
            <img style={imgStyles} src={productItem?.img[0]} alt="productImage" />
          </Box>
        </NavLink>
        <CardContentBody productItem={productItem} isInCart={isInCart} />
      </Card>
    </ThemeProvider>
  );
};

export default ProductCard;
