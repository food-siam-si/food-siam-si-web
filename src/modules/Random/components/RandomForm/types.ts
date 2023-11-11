import { MenuType } from '@/modules/Menu/api/dto';
import { RestaurantType } from '@/modules/Restaurant/api/dto';

export interface RandomFormProps {
  fetchTypes: () => Promise<MenuType[]> | Promise<RestaurantType[]>;
  handleSubmit: (data: number[], distance: number) => void;
  label: string;
  withDistance?: boolean;
}
