import Advantages from '../components/orderProcess/Advantages';
import FavouriteBlock from '../components/Favourite/FavouriteBlock/FavouriteBlock';
import AdditionalBlock from '../components/Favourite/AdditionalBlock/AdditionalBlock';
import ModalWindow from '../components/ModalWindow';

const Favourite = () => {
  return (
    <>
      <FavouriteBlock />
      <AdditionalBlock />
      <Advantages />
      <ModalWindow />
    </>
  );
};

export default Favourite;
