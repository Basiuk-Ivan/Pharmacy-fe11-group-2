import { addToCartMoreOne, removeItem } from '../../redux/slice/cartItems';
import { setCartStoreId } from '../../redux/slice/userSlice';
import { sendRequest } from '../../tools/Axios/sendRequest';

export const getBasketFromLogin = async (_id, dispatch) => {
  const cartURL = `${process.env.VITE_API_URL}/api/backet?user=${_id}`;
  const cartResponse = await sendRequest(cartURL);
  const cartProducts = cartResponse.data.products;
  const cartItemsFromLS = JSON.parse(localStorage.getItem('cartItems')) || [];

  const productsLS = cartItemsFromLS.map(({ id, quantity }) => {
    const newCartObj = { productID: id, quantity };
    return newCartObj;
  });
  const mergedProducts = [...cartProducts];

  productsLS.forEach(itemLS => {
    const foundIndex = mergedProducts.findIndex(item => item.productID === itemLS.productID);
    if (foundIndex !== -1) {
      mergedProducts[foundIndex].quantity += itemLS.quantity;
    } else {
      mergedProducts.push({ ...itemLS });
    }
  });

  dispatch(setCartStoreId(cartResponse.data.id));

  const newCartData = { id: cartResponse.data.id, products: [...mergedProducts] };
  const cartULRForPUT = `${process.env.VITE_API_URL}/api/backet`;
  const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);
  window.localStorage.removeItem('cartItems');

  dispatch(removeItem('all'));

  mergedProducts.forEach(product => {
    dispatch(addToCartMoreOne({ id: product.productID, quantity: product.quantity }));
  });
};
