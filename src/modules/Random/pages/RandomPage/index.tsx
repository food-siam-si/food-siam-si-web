import { Paper, Typography } from '@mui/material';
import { useState } from 'react';

import { Restaurant } from '@/modules/Restaurant/api/dto';
import { RestaurantApi } from '@/modules/Restaurant/api/restaurantApi';
import PageGuard from '@/modules/User/components/PageGuard';

import RandomForm from '../../components/RandomForm';
import RandomModal from '../../components/RandomModal';
const RandomPage = () => {
  const [open, setOpen] = useState(false);
  const [restaurant, setRestaurant] = useState<Restaurant>();

  const handleSubmit = async (data: number[]) => {
    setRestaurant(await RestaurantApi.random({ restaurantTypeIds: data }));
    setOpen(true);
  };

  return (
    <PageGuard allowCustomer>
      <Paper
        sx={{
          p: 2,
          m: 2,
          minWidth: 'min(90%,500px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Random Restaurant
        </Typography>

        <img src="./siamsi.svg" style={{ color: 'red', margin: '20px', height: '100px' }} />

        <RandomForm fetchTypes={RestaurantApi.getTypes} handleSubmit={handleSubmit} label="Restaurant" />
        <RandomModal
          open={open}
          onClose={() => {
            setOpen(false);
            setRestaurant(undefined);
          }}
          restaurant={restaurant}
        />
      </Paper>
    </PageGuard>
  );
};

export default RandomPage;
