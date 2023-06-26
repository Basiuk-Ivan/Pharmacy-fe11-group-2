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
import {
  removeFromCartUserDBProduct
} from '../../../../../../../utils/ActionsWithProduct/removeFromCartUserDBProduct';
import { addToCartUserDBProduct } from '../../../../../../../utils/ActionsWithProduct/addToCartUserDBProduct';

export const CartButton = ({ productItem, isInCart }) => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);

  const isOpenedCartModalRemoveOne = useSelector(state => state.itemCards.isOpenedCartModalRemoveOne);

  const handleClickCartModalRemoveOne = async (isAuth, userId) => {
    const prod = JSON.parse(window.localStorage.getItem('removeItem'));
    dispatch(removeItem(prod));

    if (isAuth) {
      await removeFromCartUserDBProduct(userId, prod.id, 1, true);
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
  // TODO Async with state
  const handleAddtoCart = () => {
    if (!isCart) {
      dispatch(addToCart({ id: productItem.id }));

      if (isAuth) {
        addToCartUserDBProduct(userId, productItem.id);
      } else {
        addToCartLocalStorage(productItem);
      }
    } else {
      dispatch(removeItem(productItem));
      if (isAuth) {
        removeFromCartUserDBProduct(userId, productItem.id);
      } else {
        removeFromCartLocalStorage(productItem);
      }
    }

    setIsCart(prevIsCart => !prevIsCart);
  };

  useEffect(() => {
    const cartString = localStorage.getItem('cartItems');

    if (cartString) {
      const cartItems = JSON.parse(cartString);
      const isItemCart = cartItems.some(elem => elem.id === productItem.id);
      setIsCart(isItemCart);
    }
  }, [isCart, productItem.id]);

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
          handleClick={() => handleClickCartModalRemoveOne(isAuth, userId)}
          handleClose={handleCloseСartModalRemoveOne}
          isOpened={isOpenedCartModalRemoveOne}
          actions
        />
      </>
    );
  }
  return (
    <IconButton onClick={handleAddtoCart} sx={cartStyle}>
      <ShoppingCartOutlinedIcon />
    </IconButton>
  );
};
