import { sendRequest } from '../../tools/sendRequest';

export const getUserOrdersFromDB = async userID => {
    try {
        const url = `http://localhost:3004/api/order?user=${userID}`;
        const ordersResponse = await sendRequest(url);
        if (!ordersResponse.statusText) {
            throw new Error('Network response was not ok');
        }

        return ordersResponse;
    } catch (err) {
        console.error('Error fetching products:', err);
    }
};