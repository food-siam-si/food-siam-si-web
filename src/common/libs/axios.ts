import axios from 'axios';

import { API_BASE_URL } from '@/common/config/env';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

console.log(API_BASE_URL);
