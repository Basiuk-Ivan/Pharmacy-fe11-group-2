import { Button, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { btnAddToCartStyle, linkToCartStyle } from '../style';
import { addToCart } from '../../../../redux/slice/cartItems';
import { addCartProduct } from '../../../../utils/ActionsWithProduct/addCartProduct';
import { putProductsToCartDB } from '../../../../utils/ActionsWithProduct/putProductsToCartDB';
import { addToCartLocalStorage } from '../../../../utils/LocalStore/addToCartLocalStorage';

const ButtonBlock = ({ productItem }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);
  const cartItems = useSelector(state => state.itemCards.items);
  const cartStoreId = useSelector(state => state.user.cartStoreId);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productItemIndex = cartItems.findIndex(item => item.id === productItem.id);
    if (productItemIndex !== -1) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartItems, productItem.id]);

  const handleAddToCart = async product => {
    dispatch(addToCart({ id: product.id }));
    if (isAuth) {
      const newProducts = addCartProduct(cartItems, product);
      await putProductsToCartDB(cartStoreId, newProducts);
    } else {
      addToCartLocalStorage(product);
    }
  };

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: '12px' }}>
      {!isInCart && (
      <Button variant="outlined" onClick={() => handleAddToCart(productItem)} disabled={productItem.quantity < 1} sx={btnAddToCartStyle}>
        Додати до корзини
      </Button>
      )}
      {isInCart && (
      <Stack alignItems="center">
        <Typography component="span" variant="body1" sx={{ color: '#2FD3AE', fontSize: '16px', m: '10px 0' }}>
          Товар додано до корзини
        </Typography>
        <NavLink to="/cart">
          <Button variant="outlined" sx={linkToCartStyle}>
            Перейти до корзини
          </Button>
        </NavLink>
      </Stack>
      )}
    </Stack>
  );
};

export default ButtonBlock;
