import { useSelector } from 'react-redux';
import Advantages from '../components/orderProcess/Advantages';
import FavouriteBlock from '../components/Favourite/FavouriteBlock/FavouriteBlock';
import AdditionalBlock from '../components/Favourite/AdditionalBlock/AdditionalBlock';
import ModalWindow from '../components/ModalWindow';

const Favourite = () => {
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  return (
    <>
      <FavouriteBlock favoriteItems={favoriteItems} />
      <AdditionalBlock favoriteItems={favoriteItems} />
      <Advantages />
      <ModalWindow />
    </>
  );
};

export default Favourite;
