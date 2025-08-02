<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Menus</h1>
    <button v-on:click="fetchMenus" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
      Fetch Menus
    </button>
    <ul class="mt-4">
      <li v-for="menu in menus" :key="menu.id" class="py-2 border-b border-gray-200">
        {{ menu.name }} - {{ menu.path }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import apiClient from '../../services/api';

const menus = ref([]);

const fetchMenus = async () => {
  try {
    const response = await apiClient.get('/menus');
    menus.value = response.data;
  } catch (error) {
    console.error('Error fetching menus:', error);
  }
};
</script>