import { Card, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation } from 'react-router-dom';
import { FavoriteCheckbox } from './components/FavoriteCheckbox';
import { theme } from '../../tools/muiTheme';
import { CardContentBody } from './components/CardContentBody/CardContentBody';
import { wrapForCardStyles, boxForImg, imgStyles } from './style';

const ProductCard = ({ productItem, isInCart, parent = 'parent', isSlider }) => {
  const { pathname } = useLocation();

  const cardWrapStyles = wrapForCardStyles(isInCart);
  const pathElements = pathname.split('/');
  const lastPathElement = pathElements[pathElements.length - 1];
  const newPathname = pathElements.slice(0, -1).join('/');
  // eslint-disable-next-line operator-linebreak
  const productPath =
    lastPathElement === parent ? `${newPathname}/${productItem.id}` : `${pathname}/${productItem.id}`;

  return (
    <ThemeProvider theme={theme}>
      <Card sx={cardWrapStyles}>
        {!isSlider ? (
          <NavLink to={productPath}>
            <FavoriteCheckbox productItem={productItem} isInCart={isInCart} />
            <Box sx={boxForImg}>
              <img style={imgStyles} src={productItem?.img[0]} alt="productImage" />
            </Box>
          </NavLink>
        ) : (
          <>
            <FavoriteCheckbox productItem={productItem} isInCart={isInCart} />
            <Box sx={{ width: '220px', height: '170px' }}>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                src={productItem?.img[0]}
                alt="productImage"
              />
            </Box>
          </>
        )}

        <CardContentBody productItem={productItem} isInCart={isInCart} isSlider={isSlider} />
      </Card>
    </ThemeProvider>
  );
};

export default ProductCard;
