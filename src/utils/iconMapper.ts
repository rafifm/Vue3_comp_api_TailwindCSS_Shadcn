import { type LucideIcon } from 'lucide-vue-next';

export async function getIconComponent(iconName: string | undefined): Promise<LucideIcon | undefined> {
  if (!iconName) {
    return undefined;
  }

  try {
    // Dynamically import the icon component
    const iconModule = await import(`lucide-vue-next`);
    const icon = iconModule[iconName];
    if (!icon) {
      console.warn(`Icon ${iconName} not found in lucide-vue-next`);
      return undefined;
    }
    return icon;
  } catch (error) {
    console.error(`Icon ${iconName} not found`, error);
    return undefined;
  }
}