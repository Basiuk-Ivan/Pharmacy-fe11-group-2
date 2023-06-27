import { sendRequest } from '../../tools/sendRequest';

export const putProductsToCartDB = async (cardId, cartProducts) => {
  try {
    const mergedProducts = cartProducts.map(({ id, quantity }) => {
      const newCartObj = { productID: id, quantity };
      return newCartObj;
    });

    const newCartData = {
      id: cardId,
      products: [...mergedProducts]
    };

    const cartULRForPUT = 'http://localhost:3004/api/backet';
    const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);

    if (!cartPUTResponse.statusText) {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
