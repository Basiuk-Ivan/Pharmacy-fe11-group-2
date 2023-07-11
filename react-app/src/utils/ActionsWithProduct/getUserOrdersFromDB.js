import { sendRequest } from '../../tools/Axios/sendRequest';

export const getUserOrdersFromDB = async userID => {
  try {
    const url = `${process.env.VITE_API_URL}/api/order?user=${userID}`;
    const ordersResponse = await sendRequest(url);
    // if (!ordersResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }

    return ordersResponse;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
