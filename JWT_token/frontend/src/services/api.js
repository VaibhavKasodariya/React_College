import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Sign Up
export const signUp = async (userData) => {
  const response = await api.post('/signup', userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Sign In
export const signIn = async (userData) => {
  const response = await api.post('/signin', userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Get Current User
export const getCurrentUser = async () => {
  const response = await api.get('/me');
  return response.data;
};

// Sign Out
export const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export default api;