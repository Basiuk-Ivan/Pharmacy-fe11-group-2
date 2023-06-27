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
import { putFavoritesToFavoritesDB } from '../utils/ActionsWithProduct/putFavoritesToFavoritesDB.js';
import { addCartProduct } from '../utils/ActionsWithProduct/addCartProduct';
import { putProductsToCartDB } from '../utils/ActionsWithProduct/putProductsToCartDB ';
import { addAllCartProduct } from '../utils/ActionsWithProduct/addAllCartProduct';

const Favourite = () => {
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const dispatch = useDispatch();
  const isOpenModalRemoveAll = useSelector(state => state.favouriteItems.isOpenedModalRemoveAll);
  const isOpenedModalAddtoCart = useSelector(state => state.favouriteItems.isOpenedModalAddtoCart);
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);
  const favoriteStoreId = useSelector(state => state.user.favoriteStoreId);
  const cartItems = useSelector(state => state.itemCards.items);
  const cartStoreId = useSelector(state => state.user.cartStoreId);

  const handleClickModalRemoveAll = async () => {
    dispatch(deleteFromFavouriteItems('all'));

    if (isAuth) {
      const favorites = [];
      await putFavoritesToFavoritesDB(favoriteStoreId, favorites);
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

  const handleClickModalAddToCart = async items => {
    items.forEach(product => {
      dispatch(addToCart({ id: product.id }));
    });

    if (isAuth) {
      const newProducts = addAllCartProduct(cartItems, items);
      await putProductsToCartDB(cartStoreId, newProducts);
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
        handleClick={() => handleClickModalAddToCart(favoriteItems)}
        handleClose={handleCloseModalAddtoCart}
        isOpened={isOpenedModalAddtoCart}
        actions
      />
    </>
  );
};

export default Favourite;
