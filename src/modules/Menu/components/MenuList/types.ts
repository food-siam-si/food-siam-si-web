import { Menu } from '../../api/dto';

export interface MenuListProps {
  menu: Menu[];
  isOwner?: boolean;
}
