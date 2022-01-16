import axios from 'axios';
import { baseUrl } from '../constants/baseURL';

const axiosInstance = axios.create({ baseURL: `http://128.199.213.149:4000` });
export default axiosInstance;
