import axios from 'axios';

const apiUrl = 'http://localhost:3004/api';
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer <token>'
};
const data = {
  username: 'JohnDoe',
  password: 'secretpassword'
};

axios.post(apiUrl, data, { headers })
  .then(response => {
    // Обработка успешного ответа
    console.log(response.data);
  })
  .catch(error => {
    // Обработка ошибки
    console.error(error);
  });
