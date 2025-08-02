<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
    <p>Welcome to the admin dashboard!</p>
     <Button
      variant="outline" @click="() => {
        toast.success('Event has been created')
      }"
    >
      Add to calendar
    </Button>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'



</script>