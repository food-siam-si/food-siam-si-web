import { Button, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { MenuApi } from '../../api';
import { Menu } from '../../api/dto';
import MenuCard from '../MenuCard';
import { MenuSectionProps } from './types';

const MenuSection = ({ restaurantId }: MenuSectionProps) => {
  const [menu, setMenu] = useState<Menu[]>();

  useEffect(() => {
    const fetch = async () => {
      setMenu(await MenuApi.getRecommended(restaurantId));
    };
    fetch();
  }, [restaurantId]);

  if (!menu) return null;

  return (
    <CardContent>
      <Stack direction="row" gap={2} alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Recommended Menu
        </Typography>
        <Button variant="text"> See All</Button>
      </Stack>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {menu.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </Stack>
    </CardContent>
  );
};

export default MenuSection;
