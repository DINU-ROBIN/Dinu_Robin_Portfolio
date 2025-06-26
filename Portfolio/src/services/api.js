import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
axios.get(`${API_BASE_URL}/api/portfolio/`)

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const portfolioAPI = {
    getAll: () => api.get('/api/portfolio/'),
    getById: (id) => api.get(`/api/portfolio/${id}/`),
    create: (data) => api.post('/api/portfolio/', data),
    update: (id, data) => api.put(`/api/portfolio/${id}/`, data),
    delete: (id) => api.delete(`/api/portfolio/${id}/`),
};

const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchData() {
  const response = await fetch(`${apiUrl}/resume/`);
  return response.json();
}

export default api;
