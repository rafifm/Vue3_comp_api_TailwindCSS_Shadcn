import { defineStore } from 'pinia';
import { ref } from 'vue';
import apiClient from '../services/api';
import router from '../router';

interface User {
  id: number;
  username: string;
  email: string;
  role_id: number;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await apiClient.post('/login', {
        email,
        password,
      });
      localStorage.setItem('access_token', response.data.access_token);
      user.value = response.data.user;
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async () => {
    try {
      await apiClient.post('/logout');
      localStorage.removeItem('access_token');
      user.value = null;
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await apiClient.get('/user');
      user.value = response.data;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      localStorage.removeItem('access_token');
      user.value = null;
    }
  };

  return { user, login, logout, fetchUser };
});