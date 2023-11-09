import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MenuApi } from '../../api';
import { Menu } from '../../api/dto';
import MenuList from '../../components/MenuList';

const OwnerMenuPage = () => {
  const params = useParams<{ id: string }>();
  const { id: restaurantId } = params;

  const [menu, setMenu] = useState<Menu[]>();

  useEffect(() => {
    const fetch = async () => {
      setMenu(await MenuApi.getCurrent());
    };
    fetch();
  }, [restaurantId]);

  if (!menu) return null;

  return <MenuList menu={menu} isOwner />;
};

export default OwnerMenuPage;
