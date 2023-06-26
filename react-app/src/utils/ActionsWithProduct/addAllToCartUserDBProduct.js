import { sendRequest } from '../../tools/sendRequest.js';

export const addAllToCartUserDBProduct = async (userId, products) => {
  try {
    const cartURL = `http://localhost:3004/api/backet?user=${userId}`;
    const cartResponse = await sendRequest(cartURL);
    const cartDBProducts = cartResponse.data[0].products;
    const cartProductsToAdd = products.map(({ id }) => {
      const newCartObj = { productID: id, quantity: 1 };
      return newCartObj;
    });

    const mergedProducts = [...cartDBProducts];

    cartProductsToAdd.forEach(itemToAdd => {
      const foundIndex = mergedProducts.findIndex(item => item.productID === itemToAdd.productID);
      if (foundIndex !== -1) {
        mergedProducts[foundIndex].quantity += 1;
      } else {
        mergedProducts.push({ ...itemToAdd });
      }
    });

    const newCartData = { id: cartResponse.data[0].id, products: [...mergedProducts] };
    const cartULRForPUT = 'http://localhost:3004/api/backet';
    const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);

    if (!cartResponse.statusText && !cartPUTResponse.statusText) {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
