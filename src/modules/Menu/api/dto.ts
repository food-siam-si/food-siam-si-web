export interface Menu {
  id: number;
  title: string;
  description: string;
  price: number;
  isRecommended: boolean;
  imageUrl: string;
  restaurantId: number;
  addons: string[];
  type: MenuType[];
}

export interface MenuType {
  id: number;
  title: string;
}
