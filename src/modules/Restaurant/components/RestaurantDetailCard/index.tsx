import { Card, CardMedia, Stack } from '@mui/material';

import { Restaurant } from '../../api/dto';
import RestaurantSection from './components/RestaurantSection';

const RestaurantDetailCard = (data: Restaurant) => {
  const { name } = data;

  return (
    <Card sx={{ maxWidth: 1200 }}>
      <CardMedia sx={{ height: 140 }} image={data.imageUrl} title={name} />
      <Stack>
        <RestaurantSection {...data} />
      </Stack>
    </Card>
  );
};

export default RestaurantDetailCard;
