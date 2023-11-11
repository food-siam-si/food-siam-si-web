import { Restaurant } from '../../api/dto';

export interface RestaurantDetailCardProps {
  restaurant: Restaurant;
  isOwner?: boolean;
  refetch: () => void;
}
