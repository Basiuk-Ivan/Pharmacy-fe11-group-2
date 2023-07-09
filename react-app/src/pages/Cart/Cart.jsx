import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import IconBreadcrumbs from './Breadcrums';
import { closeCartModalRemoveAll, removeItem, setSum } from '../../redux/slice/cartItems';
import { countSum } from '../../utils/ActionsWithProduct/countSum';
import { request } from '../../tools/Axios/request';
import ModalWindow from '../../components/ModalWindow';
import AdditionalBlock from '../../components/Favourite/AdditionalBlock/AdditionalBlock';
import { removeAllFromCartLocalStorage } from '../../utils/LocalStore/removeAllFromCartLocalStorage';
import Advantages from '../../components/orderProcess/Advantages';
import { putProductsToCartDB } from '../../utils/ActionsWithProduct/putProductsToCartDB';
import { SkeletonCartBlock } from '../../utils/Skeleton/SkeletonCartBlock';
import { SkeletonCartLine } from '../../utils/Skeleton/SkeletonCartLine';
import { SumWithDiscount } from './components/SumWithDiscount';
import { ClearCart } from './components/ClearCart';
import { IsProductsCart } from './components/IsProductsCart';

import { HeaderBox, CardBox, ContainerBox } from './style';
import './style/CartStyles.scss';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isDisabled, setDisabled] = useState(false);

  const isOpenedCartModalRemoveAll = useSelector(state => state.itemCards.isOpenedCartModalRemoveAll);
  const cartSumWithoutDiscount = useSelector(state => state.itemCards.cartSumWithoutDiscount);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  const sumDiscount = useSelector(state => state.itemCards.sumDiscount);
  const productItemCart = useSelector(state => state.itemCards.items);
  const cartStoreId = useSelector(state => state.user.cartStoreId);
  const isAuth = useSelector(state => state.user.isAuth);

  const dispatch = useDispatch();
  const isInCart = true;

  const fetchProducts = async () => {
    try {
      if (productItemCart.length > 0) {
        const cartIds = productItemCart.map(item => item.id).join(',');

        const { result } = await request({
          url: '',
          method: 'GET',
          params: { _id: cartIds }
        });

        const { data } = result;

        setProducts(data);
        const sumObj = countSum(productItemCart, data);
        dispatch(setSum(sumObj));

        const resultQuantity = data.find(item => item.quantity < 1);
        setDisabled(resultQuantity);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [dispatch, productItemCart]);

  useEffect(() => {
    const updatedProducts = products.filter(item => {
      return productItemCart.find(cartItem => cartItem.id === item.id);
    });

    setProducts(updatedProducts);
    const sumObj = countSum(productItemCart, updatedProducts);
    dispatch(setSum(sumObj));
  }, [productItemCart]);

  const handleClickCartModalRemoveAll = async () => {
    dispatch(removeItem('all'));
    if (isAuth) {
      const newProducts = [];
      await putProductsToCartDB(cartStoreId, newProducts);
    } else {
      removeAllFromCartLocalStorage();
    }
    dispatch(closeCartModalRemoveAll());
  };

  const handleCloseСartModalRemoveAll = () => {
    dispatch(closeCartModalRemoveAll());
  };

  return (
    <Box>
      <IconBreadcrumbs />

      <ContainerBox>
        {showSkeleton ? (
          <SkeletonCartBlock />
        ) : (
          <SumWithDiscount
            sumDiscount={sumDiscount}
            cartSumWithoutDiscount={cartSumWithoutDiscount}
            isDisabled={isDisabled}
          />
        )}
        <CardBox>
          <HeaderBox>
            <Typography variant="h4" gutterBottom>
              Корзина
            </Typography>
            <ClearCart />
          </HeaderBox>
          {showSkeleton ? <SkeletonCartLine /> : <IsProductsCart products={products} isInCart={isInCart} />}
        </CardBox>
      </ContainerBox>
      <ModalWindow
        mainText="Видалити всі товари з корзини?"
        confirmTextBtn="Підтвердити"
        cancelTextBtn="Відміна"
        handleClick={() => handleClickCartModalRemoveAll()}
        handleClose={handleCloseСartModalRemoveAll}
        isOpened={isOpenedCartModalRemoveAll}
        actions
      />
      <AdditionalBlock favoriteItems={favoriteItems} />
      <Advantages />
    </Box>
  );
};
export default Cart;
