import {useDispatch, useSelector} from 'react-redux';
import Advantages from '../components/orderProcess/Advantages';
import FavouriteBlock from '../components/Favourite/FavouriteBlock/FavouriteBlock';
import AdditionalBlock from '../components/Favourite/AdditionalBlock/AdditionalBlock';
import ModalWindow from '../components/ModalWindow';
import {removeFromFavouriteLocalStorage} from "../utils/LocalStore/removeFromFavouriteLocalStorage.js";
import {closeModalAddtoCart, closeModalRemoveAll, deleteFromFavouriteItems} from "../redux/slice/favouriteItems.js";
import {addToCart} from "../redux/slice/cartItems.js";
import {addToCartLocalStorage} from "../utils/LocalStore/addToCartLocalStorage.js";
import {useNavigate} from "react-router-dom";

const Favourite = () => {
    const {products} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favouriteItems.favouriteItems);
    const isOpenModalRemoveAll = useSelector(state => state.favouriteItems.isOpenedModalRemoveAll);
    const isOpenedModalAddtoCart = useSelector(state => state.favouriteItems.isOpenedModalAddtoCart);
    const navigate = useNavigate();
    const handleClickModalRemoveAll = () => {
        favourites.forEach(element => {
            removeFromFavouriteLocalStorage(element);
        });
        dispatch(deleteFromFavouriteItems('all'));
        dispatch(closeModalRemoveAll());
    };

    const handleCloseModalRemoveAll = () => {
        dispatch(closeModalRemoveAll());
    };
    const handleCloseModalAddtoCart = () => {
        dispatch(closeModalAddtoCart());
    };

    const handleClickModalAddToCart = items => {
        items.forEach(product => {
            dispatch(addToCart({id: product.id}));
            addToCartLocalStorage(product);
        })
        dispatch(closeModalAddtoCart());
        favourites.forEach(element => {
            removeFromFavouriteLocalStorage(element);
        });
        dispatch(deleteFromFavouriteItems('all'));
        navigate('/cart');
    };


    return (
        <>
            <FavouriteBlock/>
            <AdditionalBlock products={products}/>
            <Advantages/>
            <ModalWindow mainText="Видалити всі товари з обраних?" confirmTextBtn="Підтвердити" cancelTextBtn="Відміна"
                         handleClick={handleClickModalRemoveAll} handleClose={handleCloseModalRemoveAll}
                         isOpened={isOpenModalRemoveAll} actions={true}/>
            <ModalWindow mainText="Додати всі обрані товари до кошика?" confirmTextBtn="Підтвердити" cancelTextBtn="Відміна"
                         handleClick={() => handleClickModalAddToCart(products)} handleClose={handleCloseModalAddtoCart}
                         isOpened={isOpenedModalAddtoCart} actions={true}/>
        </>
    );
};

export default Favourite;
