import { useSelector } from 'react-redux';
import Advantages from '../components/orderProcess/Advantages';
import FavouriteBlock from '../components/Favourite/FavouriteBlock/FavouriteBlock';
import AdditionalBlock from '../components/Favourite/AdditionalBlock/AdditionalBlock';
import BreadTest from '../components/Favourite/BreadTest';

const Favourite = () => {
  const { products } = useSelector(state => state.products);

  return (
    <>
      <FavouriteBlock products={products} />
      <AdditionalBlock />
      <Advantages />
    </>
  );
};

export default Favourite;
