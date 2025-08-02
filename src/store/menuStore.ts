import { defineStore } from 'pinia';
import { ref } from 'vue';
import apiClient from '../services/api';
import type {Menu} from '@/types/menu'

export const useMenuStore = defineStore('menu', () => {
  const menus = ref<Menu[]>([]);

  const fetchMenus = async () => {
    try {
      const response = await apiClient.get('/menus');
      menus.value = response.data;
    } catch (error) {
      console.error('Failed to fetch menus:', error);
    }
  };

  return { menus, fetchMenus };
});