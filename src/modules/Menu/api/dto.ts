export interface Menu {
  id: number;
  title: string;
  description: string;
  price: number;
  isRecommended: boolean;
  imageUrl: string;
  restaurantId: number;
  addons: MenuAddon[];
  type: MenuType[];
}

export interface CreateMenuDto {
  title: string;
  description: string;
  price: number;
  isRecommended: boolean;
  imageUrl: string;
  restaurantId: number;
  addons: string[];
  type: number[];
}

export interface MenuType {
  id: number;
  name: string;
}

export interface MenuAddon {
  menu_id: number;
  addons: string;
}
