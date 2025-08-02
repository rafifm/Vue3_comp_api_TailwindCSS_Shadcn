<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Roles</h1>
    <button v-on:click="fetchRoles" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
      Fetch Roles
    </button>
    <ul class="mt-4">
      <li v-for="role in roles" :key="role.id" class="py-2 border-b border-gray-200">
        {{ role.name }} - {{ role.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import apiClient from '../../services/api';

const roles = ref([]);

const fetchRoles = async () => {
  try {
    const response = await apiClient.get('/roles');
    roles.value = response.data;
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};
</script>