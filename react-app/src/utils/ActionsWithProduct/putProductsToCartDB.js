import { sendRequest } from '../../tools/Axios/sendRequest';

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

    const cartULRForPUT = `${process.env.VITE_API_URL}/api/backet`;
    const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);

    // if (!cartPUTResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
