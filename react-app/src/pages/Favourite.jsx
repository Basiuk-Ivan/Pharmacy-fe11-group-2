import { useSelector } from 'react-redux';
import Advantages from '../components/orderProcess/Advantages';
import FavouriteBlock from '../components/Favourite/FavouriteBlock/FavouriteBlock';
import AdditionalBlock from '../components/Favourite/AdditionalBlock/AdditionalBlock';
import ModalWindow from '../components/ModalWindow';

const Favourite = () => {
  const { products } = useSelector(state => state.products);

  return (
    <>
      <FavouriteBlock />
      <AdditionalBlock products={products} />
      <Advantages />
      <ModalWindow />
    </>
  );
};

export default Favourite;
