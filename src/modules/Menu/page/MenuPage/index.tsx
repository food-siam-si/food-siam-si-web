import { Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MenuApi } from '../../api';
import { Menu } from '../../api/dto';
import FullMenuCard from '../../components/FullMenuCard';

const MenuPage = () => {
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

  return (
    <Paper sx={{ p: 2, m: 2, minWidth: 'min(90%,700px)', minHeight: '70vh' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Menu
      </Typography>
      <Stack gap={2} direction="row" flexWrap="wrap">
        {menu.map((item) => (
          <FullMenuCard key={item.id} {...item} />
        ))}
      </Stack>
    </Paper>
  );
};

export default MenuPage;
