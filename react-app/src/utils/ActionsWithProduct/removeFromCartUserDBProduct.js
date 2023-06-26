import { sendRequest } from '../../tools/sendRequest.js';

export const removeFromCartUserDBProduct = async (userId, productID, productQuantity = 1, isRemove = false) => {
  try {
    const cartURL = `http://localhost:3004/api/backet?user=${userId}`;
    const cartResponse = await sendRequest(cartURL);
    const cartDBProducts = cartResponse.data[0].products;
    const cartItemToRemove = { productID, quantity: productQuantity };
    const mergedProducts = [...cartDBProducts];

    const foundIndex = mergedProducts.findIndex(item => item.productID === cartItemToRemove.productID);

    if (!isRemove) {
      if (mergedProducts[foundIndex].quantity > 1) {
        mergedProducts[foundIndex].quantity -= cartItemToRemove.quantity;
      } else {
        mergedProducts.splice(foundIndex, 1);
      }
    } else {
      mergedProducts.splice(foundIndex, 1);
    }

    const newCartData = {
      id: cartResponse.data[0].id,
      products: mergedProducts
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
