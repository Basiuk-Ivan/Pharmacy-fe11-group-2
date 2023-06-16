import { useSelector } from 'react-redux';
import Advantages from '../components/orderProcess/Advantages';
import FavouriteBlock from '../components/Favourite/FavouriteBlock/FavouriteBlock';
import AdditionalBlock from '../components/Favourite/AdditionalBlock/AdditionalBlock';
import ModalWindow from '../components/ModalWindow';

const Favourite = () => {
  const { products } = useSelector(state => state.products);
  // const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);

  return (
    <>
      <FavouriteBlock
      // products={favoriteItems}
      // eslint-disable-next-line react/jsx-closing-bracket-location
      />
      <AdditionalBlock products={products} />
      <Advantages />
      <ModalWindow />
    </>
  );
};

export default Favourite;
