import { Restaurant } from '@/modules/Restaurant/api/dto';

export interface RandomModalProps {
  open: boolean;
  onClose: () => void;
  restaurant?: Restaurant;
}
