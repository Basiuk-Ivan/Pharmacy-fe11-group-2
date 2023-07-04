import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { Typography, IconButton, Skeleton, Stack } from '@mui/material';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import IconBreadcrumbs from './Breadcrums';
import ProductCard from '../../components/ProductCard';
import {
  closeCartModalRemoveAll,
  openCartModalRemoveAll, openModalNotAvailable,
  removeItem,
  setSum
} from '../../redux/slice/cartItems';
import {
  FormBox,
  FormTitle,
  FormTitlePromo,
  FormText,
  OrderButton,
  SaleBox,
  TotalBox,
  PromoBox,
  HeaderBox,
  CardBox,
  ContainerBox
} from './style';

import './style/CartStyles.scss';
import { countSum } from '../../utils/ActionsWithProduct/countSum';
import { request } from '../../tools/request';
import ModalWindow from '../../components/ModalWindow';
import AdditionalBlock from '../../components/Favourite/AdditionalBlock/AdditionalBlock';
import Advantages from '../../components/orderProcess/Advantages';
import { removeAllFromCartUserDBProduct } from '../../utils/ActionsWithProduct/removeAllFromCartUserDBProduct';
import { removeAllFromCartLocalStorage } from '../../utils/LocalStore/removeAllFromCartLocalStorage';
import { addCartProduct } from '../../utils/ActionsWithProduct/addCartProduct';
import { putProductsToCartDB } from '../../utils/ActionsWithProduct/putProductsToCartDB';
import { openModalAddtoCart } from '../../redux/slice/favouriteItems';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const productItemCart = useSelector(state => state.itemCards.items);
  const cartSumWithoutDiscount = useSelector(state => state.itemCards.cartSumWithoutDiscount);
  const sumDiscount = useSelector(state => state.itemCards.sumDiscount);
  const sumWithDiscount = useSelector(state => state.itemCards.sumWithDiscount);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const dispatch = useDispatch();
  const isOpenedCartModalRemoveAll = useSelector(state => state.itemCards.isOpenedCartModalRemoveAll);
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);
  const cartStoreId = useSelector(state => state.user.cartStoreId);
  const [isDisabled, setDisabled] = useState(false);

  const isInCart = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
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

          // const product = products.find(productItem => productItem.quantity < 1);
          // if (product) {
          //   dispatch(openModalNotAvailable());
          // } else {
          //   dispatch(openModalAddtoCart());
          // }

          const resultQuantity = data.find(item => item.quantity < 1);
          setDisabled(resultQuantity);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
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
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  return (
    <Box>
      <IconBreadcrumbs />

      <ContainerBox>
        {}
        {showSkeleton ? (
          <Stack direction="column" spacing={2}>
            <Skeleton variant="rectangular" width={270} height={400} />
          </Stack>
        ) : (
          sumWithDiscount > 0 && (
            <Box>
              <FormBox>
                <FormTitle>Ваше Замовлення</FormTitle>
                <SaleBox>
                  <FormText>Знижка </FormText>
                  <FormText>- {sumDiscount} грн</FormText>
                </SaleBox>
                <TotalBox>
                  <FormText>Без урахуваня знижки</FormText>
                  <FormText> {cartSumWithoutDiscount} грн</FormText>
                </TotalBox>

                <PromoBox mt={2}>
                  <FormTitlePromo>Загальна сума: {sumWithDiscount} грн</FormTitlePromo>
                  {isDisabled ? <FormText sx={{ color: 'red' }}>В корзині є товари, наявність яких відсутня. Для подальшого оформлення видаліть відсутні товари з корзини. </FormText>
                    :
                  <NavLink to="/orderprocess" disabled>
                    <OrderButton>Оформити замовлення</OrderButton>
                  </NavLink>}
                </PromoBox>
              </FormBox>
            </Box>
          )
        )}
        <CardBox>
          <HeaderBox>
            <Typography variant="h4" gutterBottom>
              Корзина
            </Typography>
            {products.length > 0 && (
              <IconButton onClick={() => dispatch(openCartModalRemoveAll())}>
                <DeleteOutlineTwoToneIcon />
                <Typography>Очистити корзину</Typography>
              </IconButton>
            )}
          </HeaderBox>
          {}
          {showSkeleton ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : products.length > 0 ? (
            <>
              {products.map(item => (
                <ProductCard key={item.id} productItem={item} isInCart={isInCart} />
              ))}
            </>
          ) : (
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 400,
                mt: '100px',
                mb: '400px'
              }}
            >
              Додайте товар в корзину для відображення на цій сторінці
            </Typography>
          )}
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
