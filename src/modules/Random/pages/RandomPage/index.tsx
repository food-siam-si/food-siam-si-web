import { Alert, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Restaurant } from '@/modules/Restaurant/api/dto';
import { RestaurantApi } from '@/modules/Restaurant/api/restaurantApi';
import PageGuard from '@/modules/User/components/PageGuard';

import RandomForm from '../../components/RandomForm';
import RandomModal from '../../components/RandomModal';
const RandomPage = () => {
  const [open, setOpen] = useState(false);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [location, setLocation] = useState<{ lat: number; long: number } | null>();

  const handleSubmit = async (data: number[], distance: number) => {
    setRestaurant(
      await RestaurantApi.random({
        restaurantTypeIds: data,
        maxDistanceKm: distance,
        currentLong: location?.long ?? 100.5018,
        currentLat: location?.lat ?? 13.7563,
      }),
    );
    setOpen(true);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setLocation(null);
    }

    function success(position: GeolocationPosition) {
      setLocation({ lat: position.coords.latitude, long: position.coords.longitude });
    }

    function error() {
      setLocation(null);
    }
  }, []);

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
        {location === null && (
          <Alert severity="error" sx={{ mb: 1 }}>
            Can't retrieve current location, the center of Bangkok will be used instead
          </Alert>
        )}
        <RandomForm withDistance fetchTypes={RestaurantApi.getTypes} handleSubmit={handleSubmit} label="Restaurant" />
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
