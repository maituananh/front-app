import api from './api';

const dataService = {
  get: async (endpoint, config = {}) => {
    try {
      const response = await api.get(endpoint, config);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  post: async (endpoint, data, config = {}) => {
    try {
      const response = await api.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  put: async (endpoint, data, config = {}) => {
    try {
      const response = await api.put(endpoint, data, config);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  delete: async (endpoint, config = {}) => {
    try {
      const response = await api.delete(endpoint, config);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
};

export default dataService;
