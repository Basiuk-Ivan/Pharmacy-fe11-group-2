import { sendRequest } from '../../tools/sendRequest';

export const removeAllFromCartUserDBProduct = async userId => {
  try {
    const cartURL = `${process.env.VITE_API_URL}/api/backet?user=${userId}`;
    const cartResponse = await sendRequest(cartURL);
    const emptyArr = [];

    const newCartData = {
      id: cartResponse.data[0].id,
      products: [...emptyArr]
    };

    const cartULRForPUT = `${process.env.VITE_API_URL}/api/backet`;
    const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);

    // if (!cartResponse.statusText && !cartPUTResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
