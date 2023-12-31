import { Box, Button, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuApi } from '../../api';
import { Menu } from '../../api/dto';
import MenuCard from '../MenuCard';
import { MenuSectionProps } from './types';

const MenuSection = ({ restaurantId, seeAllLink }: MenuSectionProps) => {
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
        <Button variant="text" to={seeAllLink} sx={{ flexShrink: 0 }} component={Link}>
          See All
        </Button>
      </Stack>
      {menu.length > 0 ? (
        <Box gap={2} sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
          {menu.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </Box>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No recommended menu
        </Typography>
      )}
    </CardContent>
  );
};

export default MenuSection;
