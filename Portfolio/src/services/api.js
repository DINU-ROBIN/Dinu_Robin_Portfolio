import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL); // Debug log

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for debugging
api.interceptors.request.use(
    (config) => {
        console.log('Making request to:', config.url);
        console.log('Full URL:', config.baseURL + config.url);
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor for debugging
api.interceptors.response.use(
    (response) => {
        console.log('Response received:', response.data);
        return response;
    },
    (error) => {
        console.error('Response error:', error);
        console.error('Error details:', error.response?.data);
        console.error('Status:', error.response?.status);
        return Promise.reject(error);
    }
);

export const portfolioAPI = {
    getAll: () => api.get('/api/portfolio/'),
    getById: (id) => api.get(`/api/portfolio/${id}/`),
    create: (data) => api.post('/api/portfolio/', data),
    update: (id, data) => api.put(`/api/portfolio/${id}/`, data),
    delete: (id) => api.delete(`/api/portfolio/${id}/`),
};

const apiUrl = import.meta.env.VITE_API_URL;
console.log('API_URL:', apiUrl); // Debug log

export async function fetchData() {
  const response = await fetch(`${apiUrl}/api/resume/`);
  return response.json();
}

export default api;
