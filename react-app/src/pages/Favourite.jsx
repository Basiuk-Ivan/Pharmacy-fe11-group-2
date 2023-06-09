import { useSelector } from 'react-redux';
import Advantages from '../components/orderProcess/Advantages';
import FavouriteBlock from '../components/Favourite/FavouriteBlock/FavouriteBlock';
import AdditionalBlock from '../components/Favourite/AdditionalBlock/AdditionalBlock';
import ModalWindow from '../components/ModalWindow';

const Favourite = () => {
  const { products } = useSelector(state => state.products);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  // const savedItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];

  return (
    <>
      <ModalWindow />
      <FavouriteBlock products={favoriteItems} />
      <AdditionalBlock products={products} />
      <Advantages />
    </>
  );
};

export default Favourite;
