<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { useAuthStore } from '../store/authStore';
import { useMenuStore } from '@/store/menuStore';
import { Button } from '@/components/ui/button';
import type {SidebarItem} from '@/types/SidebarItem';
import { transformMenus } from '@/utils/menuTransformer';
import {ref,onMounted}from 'vue';
const authStore = useAuthStore();
const menuStore = useMenuStore();
const navMain = ref<SidebarItem[]>([]);

const fetchAndTransformMenus = async () => {
  try {
    await menuStore.fetchMenus();
    const transformedMenus = await transformMenus(menuStore.menus);
    navMain.value = transformedMenus;
  } catch (error) {
    console.error('Failed to fetch and transform menus:', error);
  }
};

onMounted(() => {
  fetchAndTransformMenus();
});

const logout = () => {
  authStore.logout();
};
</script>
<template>
  <SidebarProvider>
    <AppSidebar :navMain="navMain" />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear  group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4 justify-between w-full " >
          <SidebarTrigger class="-ml-1" />
          <Button  @click="logout">
            <LogOut /> Log Out
          </Button>
        </div>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>