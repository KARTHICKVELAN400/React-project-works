import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:3009/', // Replace with your actual API URL
});

export default apiInstance;
