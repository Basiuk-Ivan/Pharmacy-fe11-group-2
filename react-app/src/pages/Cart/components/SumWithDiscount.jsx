import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { Box } from '@mui/system';
import {
  FormBox,
  FormText,
  FormTitle,
  FormTitlePromo,
  OrderButton,
  PromoBox,
  SaleBox,
  TotalBox
} from '../style';
import {resetDelivery} from "../../../redux/slice/orderProcessSlice";

export const SumWithDiscount = ({ sumDiscount, cartSumWithoutDiscount, isDisabled }) => {
  const dispatch =  useDispatch();
  const sumWithDiscount = useSelector(state => state.itemCards.sumWithDiscount);

  return (
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
            {isDisabled ? (
              <FormText sx={{ color: 'red' }}>
                В корзині є товари, наявність яких відсутня. Для подальшого оформлення видаліть відсутні
                товари з корзини.{' '}
              </FormText>
            ) : (
              <NavLink to="/orderprocess" onClick={()=> dispatch(resetDelivery())} disabled>
                <OrderButton>Оформити замовлення</OrderButton>
              </NavLink>
            )}
          </PromoBox>
        </FormBox>
      </Box>
    )
  );
};
