import CreateIcon from '@mui/icons-material/Create';
import { Button, Card, CardMedia, Divider, Stack } from '@mui/material';

import ReviewSection from '@/modules/Review/components/ReviewSection';

import MenuSection from '../../../Menu/components/MenuSection';
import RestaurantSection from './components/RestaurantSection';
import { RestaurantDetailCardProps } from './types';

const RestaurantDetailCard = ({ restaurant, isOwner }: RestaurantDetailCardProps) => {
  const { name, id, imageUrl } = restaurant;

  return (
    <Card sx={{ maxWidth: 1200 }}>
      <CardMedia sx={{ height: 200 }} image={imageUrl} title={name} />
      <Stack divider={<Divider variant="middle" />}>
        <RestaurantSection {...restaurant} />
        <MenuSection restaurantId={id} seeAllLink={isOwner ? '/manage/menu' : `/restaurants/${id}/menu`} />
        <ReviewSection restaurantId={id} enableReview={!isOwner} />
      </Stack>
      {isOwner && (
        <Button
          variant="contained"
          startIcon={<CreateIcon />}
          sx={{ float: 'right', mr: 2, mb: 2 }}
          href="/manage/restaurant/edit"
        >
          Edit Restaurant
        </Button>
      )}
    </Card>
  );
};

export default RestaurantDetailCard;
