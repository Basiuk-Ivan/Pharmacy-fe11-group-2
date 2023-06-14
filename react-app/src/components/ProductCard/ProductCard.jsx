import {
  Card,
  // CardMedia,
  Box
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation } from 'react-router-dom';
import { FavoriteCheckbox } from './components/FavoriteCheckbox';
import { theme } from '../../tools/muiTheme';
import { CardContentBody } from './components/CardContentBody/CardContentBody';
import {
  wrapForCardStyles
  // cardMediaStyles
} from './style';

const ProductCard = ({ productItem, isInCart }) => {
  const cardWrapStyles = wrapForCardStyles(isInCart);
  // const cardMediaStyle = cardMediaStyles(isInCart);

  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Card sx={cardWrapStyles}>
        <NavLink to={`${pathname}/${productItem?.id}`}>
          <FavoriteCheckbox productItem={productItem} isInCart={isInCart} />
          <Box sx={{ width: '220px', height: '170px' }}>
            <img
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              src={productItem?.img[0]}
              alt="productImage"
            />
            {/* <CardMedia sx={cardMediaStyle} image={productItem?.img[0]} title="productImage" /> */}
          </Box>
        </NavLink>
        <CardContentBody productItem={productItem} isInCart={isInCart} />
      </Card>
    </ThemeProvider>
  );
};

export default ProductCard;
