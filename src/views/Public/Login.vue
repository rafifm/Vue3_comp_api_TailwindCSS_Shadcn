<template>
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="flex flex-col gap-4 p-6 md:p-10">
      <div class="flex justify-center gap-2 md:justify-start">
        <a href="#" class="flex items-center gap-2 font-medium">
          <div class="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          </div>
          Acme Inc.
        </a>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-xs">
          <LoginForm 
            v-model:email="email"
            v-model:password="password"
            :login="login"
          />
        </div>
      </div>  
    </div>
    <div class="relative hidden bg-muted lg:block">
      <img
        alt="Image"
        class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/authStore';
import LoginForm from '@/components/LoginForm.vue'
import { toast } from 'vue-sonner'

const router = useRouter();
const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    console.log('Login method called');
    await authStore.login(email.value, password.value);
    toast.success('Login Berhasil')
  } catch (error) {
    console.error('Login failed:', error);
  }
};
</script>