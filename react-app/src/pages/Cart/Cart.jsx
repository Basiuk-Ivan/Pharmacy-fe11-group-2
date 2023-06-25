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
  openCartModalRemoveAll,
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
import { removeAllFromCart } from '../../utils/LocalStore/removeAllFromCart';
import { countSum } from '../../utils/ActionsWithProduct/countSum';
import { request } from '../../tools/request';
import ModalWindow from '../../components/ModalWindow';
import AdditionalBlock from '../../components/Favourite/AdditionalBlock/AdditionalBlock';
import Advantages from '../../components/orderProcess/Advantages';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const productItemCart = useSelector(state => state.itemCards.items);
  const cartSumWithoutDiscount = useSelector(state => state.itemCards.cartSumWithoutDiscount);
  const sumDiscount = useSelector(state => state.itemCards.sumDiscount);
  const sumWithDiscount = useSelector(state => state.itemCards.sumWithDiscount);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const dispatch = useDispatch();
  const isOpenedCartModalRemoveAll = useSelector(state => state.itemCards.isOpenedCartModalRemoveAll);

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

  const handleClickCartModalRemoveAll = () => {
    dispatch(removeItem('all'));
    removeAllFromCart();
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
                  <NavLink to="/orderprocess">
                    <OrderButton>Оформити замовлення</OrderButton>
                  </NavLink>
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
        handleClick={handleClickCartModalRemoveAll}
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
