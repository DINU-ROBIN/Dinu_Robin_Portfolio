import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

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

export default api;
