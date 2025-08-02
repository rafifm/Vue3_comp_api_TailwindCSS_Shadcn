import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the URL to match your Laravel backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach the token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;