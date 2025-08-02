
<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Users</h1>
    <button v-on:click="fetchUsers" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
      Fetch Users
    </button>
    <ul class="mt-4">
      <li v-for="user in users" :key="user.id" class="py-2 border-b border-gray-200">
        {{ user.username }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import apiClient from '../../services/api';

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
</script>