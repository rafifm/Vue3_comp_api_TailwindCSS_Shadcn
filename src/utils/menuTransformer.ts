import type { Menu } from '@/types/menu';
import type { SidebarItem } from '@/types/SidebarItem';
import { getIconComponent } from '@/utils/iconMapper';

export async function transformMenus(menus: Menu[]):  Promise<SidebarItem[]> {
  const menuMap: { [key: number]: SidebarItem } = {};
  const result: SidebarItem[] = []; 

  // First pass: Initialize all menu items without attaching child items
  const iconPromises: Promise<void>[] = menus.map(async menu => {
    const icon = await getIconComponent(menu.icon_name);

    const sidebarItem: SidebarItem = {
      title: menu.name,
      url: menu.path,
      icon: icon,
      items: [],
    };

    menuMap[menu.id] = sidebarItem;

    if (menu.parent_id === null) {
      result.push(sidebarItem);
    }
  });

  // Wait for all icon imports to complete
  await Promise.all(iconPromises);

  // Second pass: Attach child items to their parent items
  menus.forEach(menu => {
    if (menu.parent_id !== null && menuMap[menu.parent_id]) {
      menuMap[menu.parent_id].items!.push(menuMap[menu.id]);
    } else if (menu.parent_id !== null) {
      console.warn(`Parent menu with ID ${menu.parent_id} not found for menu ID ${menu.id}`);
    }
  });

// Sort the top-level items by order
  result.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  // Recursively sort child items
  const sortItems = (items: SidebarItem[]) => {
    items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    items.forEach(item => {
      if (item.items && item.items.length > 0) {
        sortItems(item.items);
      }
    });
  };

  sortItems(result);
  return result;
}