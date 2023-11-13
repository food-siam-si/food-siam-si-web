import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserType } from '@/modules/User/api/dto';
import withGuard from '@/modules/User/hoc/withGuard';

import { MenuApi } from '../../api';
import { Menu } from '../../api/dto';
import MenuList from '../../components/MenuList';

const MenuPage = withGuard(() => {
  const params = useParams<{ id: string }>();
  const { id: restaurantId } = params;

  const [menu, setMenu] = useState<Menu[]>();

  useEffect(() => {
    const fetch = async () => {
      setMenu(await MenuApi.get(Number(restaurantId || '0')));
    };
    fetch();
  }, [restaurantId]);

  if (!menu) return null;

  return <MenuList menu={menu} />;
}, [UserType.Customer]);

export default MenuPage;
