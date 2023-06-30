import { sendRequest } from '../../tools/sendRequest';

export const updateUserDB = async (userID, userData, changePassword = false) => {
  try {
    let newCartData;
    if (changePassword) {
      newCartData = {
        firstName: userData.firstName,
        secondName: userData.secondName,
        gender: userData.gender,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        userBirthday: userData.birthday,
        password: userData.confirmpassword
      };
    } else {
      newCartData = {
        firstName: userData.firstName,
        secondName: userData.secondName,
        gender: userData.gender,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        userBirthday: userData.birthday
      };
    }

    const userURL = `http://localhost:3004/api/users/${userID}`;
    const userURLResponse = await sendRequest(userURL, 'POST', newCartData);

    return userURLResponse;

    if (!userURLResponse.statusText) {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
