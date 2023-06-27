import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { addToCartLocalStorage } from '../../../../../../../utils/LocalStore/addToCartLocalStorage';
import { removeFromCartLocalStorage } from '../../../../../../../utils/LocalStore/removeFromCartLocalStorage';
import {
  addToCart,
  closeCartModalRemoveOne,
  openCartModalRemoveOne,
  removeItem
} from '../../../../../../../redux/slice/cartItems';
import { cartStyles, iconButtonStyles } from '../../../../../style';
import ModalWindow from '../../../../../../ModalWindow';
import { addCartProduct } from '../../../../../../../utils/ActionsWithProduct/addCartProduct';
import { removeCartProduct } from '../../../../../../../utils/ActionsWithProduct/removeCartProduct';
import {
  removeCartProductAllquantity
} from '../../../../../../../utils/ActionsWithProduct/removeCartProductAllquantity';
import {putProductsToCartDB} from '../../../../../../../utils/ActionsWithProduct/putProductsToCartDB';

export const CartButton = ({ productItem, isInCart }) => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);
  const cartItems = useSelector(state => state.itemCards.items);
  const cartStoreId = useSelector(state => state.user.cartStoreId);

  const isOpenedCartModalRemoveOne = useSelector(state => state.itemCards.isOpenedCartModalRemoveOne);

  useEffect(() => {
    const productItemIndex = cartItems.findIndex(item => item.id === productItem.id);
    if (productItemIndex !== -1) {
      setIsCart(true);
    } else {
      setIsCart(false);
    }
  }, [cartItems, productItem.id]);

  const handleClickCartModalRemoveOne = async () => {
    const prod = JSON.parse(window.localStorage.getItem('removeItem'));
    dispatch(removeItem(prod));

    if (isAuth) {
      const newProducts = removeCartProductAllquantity(cartItems, prod);
      await putProductsToCartDB(cartStoreId, newProducts);
    } else {
      removeFromCartLocalStorage(prod);
    }

    dispatch(closeCartModalRemoveOne());
  };
  const handleCloseСartModalRemoveOne = product => {
    dispatch(closeCartModalRemoveOne());
  };

  const iconClick = productForRemove => {
    dispatch(openCartModalRemoveOne());
    window.localStorage.setItem('removeItem', JSON.stringify(productForRemove));
  };

  const handleAddToCart = async product => {
    if (!isCart) {
      dispatch(addToCart({ id: product.id }));

      if (isAuth) {
        const newProducts = addCartProduct(cartItems, product);
        await putProductsToCartDB(cartStoreId, newProducts);
      } else {
        addToCartLocalStorage(productItem);
      }
    } else {
      dispatch(removeItem(productItem));
      if (isAuth) {
        const newProducts = removeCartProduct(cartItems, product);
        await putProductsToCartDB(cartStoreId, newProducts);
      } else {
        removeFromCartLocalStorage(productItem);
      }
    }
  };


  const cartStyle = cartStyles(isCart);

  if (isInCart) {
    return (
      <>
        <IconButton sx={iconButtonStyles} onClick={() => iconClick(productItem)}>
          <CloseIcon />
        </IconButton>
        <ModalWindow
          mainText="Видалити даний товар з корзини?"
          confirmTextBtn="Так"
          cancelTextBtn="Ні"
          handleClick={() => handleClickCartModalRemoveOne()}
          handleClose={handleCloseСartModalRemoveOne}
          isOpened={isOpenedCartModalRemoveOne}
          actions
        />
      </>
    );
  }
  return (
    <IconButton onClick={() => handleAddToCart(productItem)} sx={cartStyle}>
      <ShoppingCartOutlinedIcon />
    </IconButton>
  );
};
