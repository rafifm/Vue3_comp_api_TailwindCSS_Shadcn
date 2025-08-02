<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold text-gray-900">Welcome to the Public Page</h1>
    <router-link to="/login" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
      Login
    </router-link>
  </div>
</template>

<script setup lang="ts">
// No script needed for this simple view
</script>