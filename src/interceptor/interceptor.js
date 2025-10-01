import api from '../service/api';
import dataService from '../service/dataService';

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    console.log('Interceptor token:', accessToken);
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request to prevent infinite loops

      try {
        const refreshToken = localStorage.getItem('refreshToken'); // Retrieve refresh token
        const response = await dataService.post('/auth/refresh-token', {
          refreshToken: refreshToken,
        });

        const newAccessToken = response.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken); // Store new access token

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return api(originalRequest); // Retry the original request
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
