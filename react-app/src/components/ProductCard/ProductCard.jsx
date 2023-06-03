import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';
import { addToFavouriteLocalStor } from '../../utils/addToFavouriteLocalStor';
import { removeFromFavouriteLocalStor } from '../../utils/removeFromFavouriteLocalStor';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../redux/slice/favouriteItems';
import { RatingCard } from './components/RatingCard';
import { ProductDetails } from './components/ProductDetails';
import { PriceCard } from './components/PriceCard';
import {
  wrapForCardStyles,
  cardMediaStyles,
  cardContentStyles,
  productNameStyles,
  productDayStyles,
  favoriteIconStyles
} from './style';
import s from './style/ProductCard.module.scss';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
  palette: {
    primary: {
      main: '#2FD3AE'
    },
    secondary: {
      main: '#ffffff'
    },
    success: {
      main: '#ed6c02'
    }
  }
});

const ProductCard = ({ productItem, isInCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const cardWrapStyles = wrapForCardStyles(isInCart);
  const cardMediaStyle = cardMediaStyles(isInCart);
  const cardContentStyle = cardContentStyles(isInCart);

  const handleFavoriteClick = event => {
    event.preventDefault();
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addToFavouriteLocalStor(productItem);
      dispatch(addToFavouriteItems(productItem));
    } else {
      removeFromFavouriteLocalStor(productItem);
      dispatch(deleteFromFavouriteItems(productItem.id));
    }
  };

  useEffect(() => {
    const productItemFavourite = localStorage.getItem(`favouriteItem_${productItem.id}`);
    if (productItemFavourite) {
      const { isFavourite } = JSON.parse(productItemFavourite);
      setIsFavorite(isFavourite);
    }
  }, [productItem.id]);

  return (
    <ThemeProvider theme={theme}>
      <NavLink to={`/products/${productItem?.id}`}>
        <Card sx={cardWrapStyles}>
          <Box sx={favoriteIconStyles} onClick={handleFavoriteClick}>
            {isFavorite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon />}
          </Box>
          <CardMedia sx={cardMediaStyle} image={productItem?.img[0]} title="productImage" />
          <CardContent sx={cardContentStyle}>
            <RatingCard productItem={productItem} />
            <Typography
              className={s.productName}
              gutterBottom
              variant="h5"
              component="p"
              sx={productNameStyles}
            >
              {productItem?.name}
            </Typography>
            <ProductDetails productItem={productItem} />
            <PriceCard productItem={productItem} />
            <Typography variant="span" gutterBottom sx={productDayStyles}>
              Товар дня
            </Typography>
          </CardContent>
        </Card>
      </NavLink>
    </ThemeProvider>
  );
};

export default ProductCard;
