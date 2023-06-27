import { sendRequest } from '../../tools/sendRequest';

export const addToCartUserDBProduct = async (userId, productID, productQuantity = 1) => {
  try {
    const cartURL = `http://localhost:3004/api/backet?user=${userId}`;
    const cartResponse = await sendRequest(cartURL);
    const cartDBProducts = cartResponse.data.products;
    const cartItemToAdd = { productID, quantity: productQuantity };
    const mergedProducts = [...cartDBProducts];
    const foundIndex = mergedProducts.findIndex(item => item.productID === cartItemToAdd.productID);
    if (foundIndex !== -1) {
      mergedProducts[foundIndex].quantity += cartItemToAdd.quantity;
    } else {
      mergedProducts.push({ ...cartItemToAdd });
    }

    const newCartData = {
      id: cartResponse.data.id,
      products: mergedProducts
    };
    console.log('merged', mergedProducts);
    console.log('newCartData', newCartData);

    const cartULRForPUT = 'http://localhost:3004/api/backet';
    const cartPUTResponse = await sendRequest(cartULRForPUT, 'PUT', newCartData);

    if (!cartResponse.statusText && !cartPUTResponse.statusText) {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
