import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

import { Menu } from '../../api/dto';

const MenuCard = (menu: Menu) => {
  const { imageUrl, title, description } = menu;
  return (
    <Card>
      <CardMedia sx={{ height: 100, width: '100%', objectFit: 'cover' }} image={imageUrl} title={menu.title} />
      <CardContent sx={{ p: 1, pb: '8px !important', height: 'calc(100% - 110px)' }}>
        <Stack height="100%">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
            {description.length > 50 ? description.slice(0, 50) + '...' : description}
          </Typography>
          <Typography sx={{ textAlign: 'right' }} color="primary">
            {menu.price} ฿
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
