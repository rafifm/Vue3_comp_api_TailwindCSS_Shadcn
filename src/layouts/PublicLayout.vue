<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-gray-800 p-4 text-white">
      <h1 class="text-2xl font-bold">Public Page</h1>
      <nav class="mt-4">
        <router-link to="/" class="mr-4 text-blue-500 hover:text-blue-700">Home</router-link>
        <router-link to="/login" class="mr-4 text-blue-500 hover:text-blue-700">Login</router-link>
      </nav>
    </header>
    <main class="p-6">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
// No script needed for this simple layout
</script>