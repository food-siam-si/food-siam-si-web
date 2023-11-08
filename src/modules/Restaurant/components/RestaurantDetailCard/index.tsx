import { Card, CardMedia, Divider, Stack } from '@mui/material';

import ReviewSection from '@/modules/Review/components/ReviewSection';

import MenuSection from '../../../Menu/components/MenuSection';
import { Restaurant } from '../../api/dto';
import RestaurantSection from './components/RestaurantSection';

const RestaurantDetailCard = (data: Restaurant) => {
  const { name } = data;

  return (
    <Card sx={{ maxWidth: 1200 }}>
      <CardMedia sx={{ height: 200 }} image={data.imageUrl} title={name} />
      <Stack divider={<Divider variant="middle" />}>
        <RestaurantSection {...data} />
        <MenuSection restaurantId={data.id} />
        <ReviewSection restaurantId={data.id} />
      </Stack>
    </Card>
  );
};

export default RestaurantDetailCard;
