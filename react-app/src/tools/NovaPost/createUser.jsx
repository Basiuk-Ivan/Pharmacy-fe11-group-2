import { useSelector } from 'react-redux';
import { request } from '../request';

const createUser = order => {
  const createUrl = 'https://api.novaposhta.ua/v2.0/json/';
  const apiKey = 'c71f7c387212729b0b69b515fbb4ff23';
  const userParams = {
    apiKey,
    modelName: 'Counterparty',
    calledMethod: 'save',
    methodProperties: {
      FirstName: order.firstName,
      // MiddleName: 'Іванович',
      LastName: order.lastName,
      Phone: order.phone,
      Email: order.email,
      CounterpartyType: 'PrivatePerson',
      CounterpartyProperty: 'Recipient'
    }
  };

  const createReq = async () => {
    try {
      const { result } = await request({
        url: createUrl,
        method: 'POST',
        body: userParams
      });

      const { data } = result;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  createReq();
};

export default createUser;
