import axios from 'axios';

const productInstance = axios.create({
  // baseURL: 'http://localhost:3004/api/product'
  baseURL: `${process.env.VITE_API_URL}/api/product`
});

const orderInstance = axios.create({
  // baseURL: 'http://localhost:3004/api'
  baseURL: `${process.env.VITE_API_URL}/api`
});

export const request = async ({ url, method = 'GET', params, body, headers } = {}) => {
  const instance = method === 'POST' ? orderInstance : productInstance;

  instance.defaults.headers.post['Content-Type'] = 'application/json';

  const fetchData = () => {
    if (method === 'GET') {
      return instance.get(url, { params });
    }
    if (method === 'POST') {
      return instance.post(url, body, { headers });
    }
  };

  try {
    const { data, status } = await fetchData();

    return { result: data, status };
  } catch (error) {
    return { err: error.response };
  }
};
