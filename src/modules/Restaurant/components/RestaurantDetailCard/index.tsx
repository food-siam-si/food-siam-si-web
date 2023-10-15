import { Card, CardMedia, Divider, Stack } from '@mui/material';

import { Restaurant } from '../../api/dto';
import MenuSection from './components/MenuSection';
import RestaurantSection from './components/RestaurantSection';
import ReviewSection from './components/ReviewSection';

const RestaurantDetailCard = (data: Restaurant) => {
  const { name } = data;

  return (
    <Card sx={{ maxWidth: 1200 }}>
      <CardMedia sx={{ height: 200 }} image={data.imageUrl} title={name} />
      <Stack divider={<Divider variant="middle" />}>
        <RestaurantSection {...data} />
        <MenuSection />
        <ReviewSection />
      </Stack>
    </Card>
  );
};

export default RestaurantDetailCard;
