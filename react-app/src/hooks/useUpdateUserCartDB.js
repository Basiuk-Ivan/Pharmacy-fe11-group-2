import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendRequest } from '../tools/sendRequest';

export const useUpdateUserCartDB = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.itemCards.items);
  const cartStoreId = useSelector(state => state.user.cartStoreId);

  useEffect(() => {
    const updateCart = async () => {
      const productsForPut = cartStoreId.map(({ id, quantity }) => {
        const newCartObj = { productID: id, quantity };
        return newCartObj;
      });

      const newCartData = {
        id: cartStoreId,
        products: [...productsForPut]
      };

      const cartULRForPUT = 'http://localhost:3004/api/basket';
      const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);
    };

    updateCart();
  }, [cartItems, cartStoreId, dispatch]);
};
