import { request } from '../Axios/request';

const searchWarehouse = async city => {
  const createUrl = 'https://api.novaposhta.ua/v2.0/json/';
  const apiKey = 'c71f7c387212729b0b69b515fbb4ff23';
  const warehouseParams = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: city,
      TypeOfWarehouseRef: '841339c7-591a-42e2-8233-7a0a00f0ed6f'
    }
  };

  try {
    const { result } = await request({
      url: createUrl,
      method: 'POST',
      body: warehouseParams
    });

    const { data } = result;
    return data;
  } catch (error) {
    console.error('Error fetching warehouses:', error);
    return [];
  }
};

export default searchWarehouse;
