import api from "./api";
import axios from "axios";

api.interceptors.response.use(
    (response) => response, 
    async (error) => {
        if (error.response.status == 401) {
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
                try {
                    const response = await axios.post (
                        'http://127.0.0.1:8000/api/token/refresh',
                        { refresh: refreshToken}
                    );
                    localStorage.setItem('accessToken', response.data.access);
                    error.config.headers.Authorization = `Bearer ${response.data.access}`
                    return api.request(error.config)
                } catch (refreshError) {
                    console.error('Token refresh failed: ', refreshError)
                }
            }
        }
        return Promise.reject(error);
    }
)