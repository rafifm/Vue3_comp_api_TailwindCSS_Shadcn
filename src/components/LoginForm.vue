<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const props = defineProps<{
  email: string;
  password: string;
  login: () => Promise<void>;
  class?: HTMLAttributes['class'];
}>();
const emit = defineEmits<{
  (e: 'update:email', value: string): void;
  (e: 'update:password', value: string): void;
}>();
</script>

<template>
  <form :class="cn('flex flex-col gap-6', props.class)" @submit.prevent="login"> 
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-2xl font-bold">
        Login to your account
      </h1>
      <p class="text-muted-foreground text-sm text-balance">
        Enter your email below to login to your account
      </p>
    </div>
    <div class="grid gap-6">
      <div class="grid gap-3">
        <Label for="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="m@example.com" 
          required
          :modelValue="props.email"
          @update:modelValue="emit('update:email', $event)"
        />
      </div>
      <div class="grid gap-3">
        <div class="flex items-center">
          <Label for="password">Password</Label>
          <a
            href="#"
            class="ml-auto text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
        <Input 
          id="password" 
          type="password" 
          required 
          :modelValue="props.password"
          @update:modelValue="emit('update:password', $event)"
        />
      </div>
      <Button type="submit" class-name="w-full">
        Login
      </Button>
    </div>
  </form>
</template>
