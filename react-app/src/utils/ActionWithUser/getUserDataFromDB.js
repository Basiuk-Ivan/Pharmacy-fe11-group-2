import { sendRequest } from '../../tools/sendRequest';

export const getUserDataFromDB = async userId => {
  try {
    const url = `${process.env.VITE_API_URL}/api/users?_id=${userId}`;
    const userResponse = await sendRequest(url);
    // if (!userResponse.status) {
    //   throw new Error('Network response was not ok');
    // }

    return userResponse.data;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
