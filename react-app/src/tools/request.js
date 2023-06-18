import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004/api/product'
});

export const request = async ({ url, method = 'GET', params, body, headers } = {}) => {
  instance.defaults.headers.post['Content-Type'] = 'application/json';

  const fetchData = () => {
    if (method === 'GET') {
      return instance.get(url, { params });
    }
    return instance({ url, method, data: body, headers });
  };

  try {
    const { data, status } = await fetchData();

    return { result: data, status };
  } catch (error) {
    return { err: error.response };
  }
};
