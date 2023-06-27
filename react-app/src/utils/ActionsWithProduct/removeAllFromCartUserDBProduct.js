import { sendRequest } from '../../tools/sendRequest';

export const removeAllFromCartUserDBProduct = async userId => {
  try {
    const cartURL = `http://localhost:3004/api/backet?user=${userId}`;
    const cartResponse = await sendRequest(cartURL);
    const emptyArr = [];

    const newCartData = {
      id: cartResponse.data[0].id,
      products: [...emptyArr]
    };

    const cartULRForPUT = 'http://localhost:3004/api/backet';
    const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);

    if (!cartResponse.statusText && !cartPUTResponse.statusText) {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
