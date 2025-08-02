<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-vue-next'
import NavMain from '@/components/NavMain.vue'
import NavProjects from '@/components/NavProjects.vue'
import NavUser from '@/components/NavUser.vue'
import TeamSwitcher from '@/components/TeamSwitcher.vue'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import logo from '@/assets/img/logoppg.png';
import type { SidebarItem } from '@/types/SidebarItem'

// const props = withDefaults(defineProps<SidebarProps>(), {
//   collapsible: 'icon',
// })
    
const props = defineProps<{
  navMain: SidebarItem[];
}>();
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <img :src="logo" class="pr-6"/>
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="navMain" />
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
