import axios from 'axios';
import TokenService from './token-service';
const BASE_URL = 'https://fakestoreapi.com/';
const axiosClient = axios.create({ timeout: 10000});
axiosClient.interceptors.request.use(
async (config) => {
    const token = await TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token; 
    }
    return config;
}, error => {
    return Promise.reject(error);
});
  
export default axiosClient;