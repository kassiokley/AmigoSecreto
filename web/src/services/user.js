import api from './api'


const UserService = {
  create: (params) => api.post('/users', params),

  upadte: async (params) => {
    const response = await api.put('/users', params);
    localStorage.setItem('users', JSON.stringify(response.data));
  },

  search: (id, params) => api.get(`users/${id}`, params),

  delete: (id) => api.get(`users/${id}`),
}

export default UserService;