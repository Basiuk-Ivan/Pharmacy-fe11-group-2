import { sendRequest } from '../../tools/sendRequest';

export const getUserDataFromDB = async userId => {
  try {
    const url = `http://localhost:3004/api/users?_id=${userId}`;
    const userResponse = await sendRequest(url);
    if (!userResponse.statusText) {
      throw new Error('Network response was not ok');
    }

    return userResponse.data;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
