import { sendRequest } from '../../tools/Axios/sendRequest';

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

    const userURL = `${process.env.VITE_API_URL}/api/users/${userID}`;
    const userURLResponse = await sendRequest(userURL, 'POST', newCartData);

    // if (!userURLResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }

    return userURLResponse;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
