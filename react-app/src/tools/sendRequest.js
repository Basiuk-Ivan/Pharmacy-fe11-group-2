import axios from 'axios';

export const sendRequest = async (url, method = 'GET', data = null, headers = {}) => {
  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...headers
    };

    const response = await axios({
      method,
      url,
      data,
      headers: defaultHeaders
    });


    return response;

  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Network response was not ok'
    );
  }
};
