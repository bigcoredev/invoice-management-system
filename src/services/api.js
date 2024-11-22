import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5005/api', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
