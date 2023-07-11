import { request } from '../Axios/request';

const searchAddress = async () => {
  const createUrl = 'https://api.novaposhta.ua/v2.0/json/';
  const apiKey = 'c71f7c387212729b0b69b515fbb4ff23';
  const addressParams = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getCities'
  };

  try {
    const { result } = await request({
      url: createUrl,
      method: 'POST',
      body: addressParams
    });

    const { data } = result;
    return data;
  } catch (error) {
    console.error('Error fetching warehouses:', error);
    return [];
  }
};

export default searchAddress;
