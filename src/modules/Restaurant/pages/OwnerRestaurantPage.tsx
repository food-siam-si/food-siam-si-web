import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Restaurant } from '../api/dto';
import { RestaurantApi } from '../api/restaurantApi';
import RestaurantDetailCard from '../components/RestaurantDetailCard';

const RestaurantPage = () => {
  const [data, setData] = useState<Restaurant | null>();

  useEffect(() => {
    const fetchData = async () => {
      setData(await RestaurantApi.getCurrent());
    };
    fetchData();
  }, []);

  if (data === null) return <Navigate to="/manage/restaurant/edit" replace={true} />;
  if (!data) return null;

  return <RestaurantDetailCard restaurant={data} isOwner />;
};

export default RestaurantPage;
