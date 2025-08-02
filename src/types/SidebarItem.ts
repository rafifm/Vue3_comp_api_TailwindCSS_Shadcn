import type { LucideIcon } from "lucide-vue-next";

export interface SidebarItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SidebarItem[];
}