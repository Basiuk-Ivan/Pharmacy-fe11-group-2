import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Advantages from '../components/orderProcess/Advantages';
import FavouriteBlock from '../components/Favourite/FavouriteBlock/FavouriteBlock';
import AdditionalBlock from '../components/Favourite/AdditionalBlock/AdditionalBlock';
import ModalWindow from '../components/ModalWindow';
import { removeFromFavouriteLocalStorage } from '../utils/LocalStore/removeFromFavouriteLocalStorage';
import { closeModalAddtoCart, closeModalRemoveAll, deleteFromFavouriteItems } from '../redux/slice/favouriteItems';
import { addToCart } from '../redux/slice/cartItems';
import { addToCartLocalStorage } from '../utils/LocalStore/addToCartLocalStorage';
import { addToCartUserDBProduct } from '../utils/ActionsWithProduct/addToCartUserDBProduct.js';
import { removeFromFavoriteUserDBProduct } from '../utils/ActionsWithProduct/removeFromFavoriteUserDBProduct.js';
import { removeAllFromFavoriteUserDB } from '../utils/ActionsWithProduct/removeAllFromFavoriteUserDB.js';
import { addAllToCartUserDBProduct } from '../utils/ActionsWithProduct/addAllToCartUserDBProduct.js';

const Favourite = () => {
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const dispatch = useDispatch();
  const isOpenModalRemoveAll = useSelector(state => state.favouriteItems.isOpenedModalRemoveAll);
  const isOpenedModalAddtoCart = useSelector(state => state.favouriteItems.isOpenedModalAddtoCart);
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);

  const handleClickModalRemoveAll = async () => {
    dispatch(deleteFromFavouriteItems('all'));

    if (isAuth) {
      await removeAllFromFavoriteUserDB(userId);
    } else {
      favoriteItems.forEach(element => {
        removeFromFavouriteLocalStorage(element);
      });
    }

    dispatch(closeModalRemoveAll());
  };

  const handleCloseModalRemoveAll = () => {
    dispatch(closeModalRemoveAll());
  };
  const handleCloseModalAddtoCart = () => {
    dispatch(closeModalAddtoCart());
  };

  const handleClickModalAddToCart = async (isAuth, userId, items) => {

    items.forEach(product => {
      dispatch(addToCart({ id: product.id }));
    });

    if (isAuth) {
      await addAllToCartUserDBProduct(userId, items);
    } else {
      items.forEach(product => {
        addToCartLocalStorage(product);
      });
    }
    dispatch(closeModalAddtoCart());

    navigate('/cart');
  };

  return (
    <>
      <FavouriteBlock favoriteItems={favoriteItems} />
      <AdditionalBlock favoriteItems={favoriteItems} />
      <Advantages />
      <ModalWindow
        mainText="Видалити всі товари з обраних?"
        confirmTextBtn="Підтвердити"
        cancelTextBtn="Відміна"
        handleClick={handleClickModalRemoveAll}
        handleClose={handleCloseModalRemoveAll}
        isOpened={isOpenModalRemoveAll}
        actions
      />
      <ModalWindow
        mainText="Додати всі обрані товари до кошика?"
        confirmTextBtn="Підтвердити"
        cancelTextBtn="Відміна"
        handleClick={() => handleClickModalAddToCart(isAuth, userId, favoriteItems)}
        handleClose={handleCloseModalAddtoCart}
        isOpened={isOpenedModalAddtoCart}
        actions
      />
    </>
  );
};

export default Favourite;
