export interface Menu {
  id: number;
  name: string;
  path: string;
  icon_name?: string;
  parent_id?: number;
  order?: number;
  created_at?: string;
  updated_at?: string;
}