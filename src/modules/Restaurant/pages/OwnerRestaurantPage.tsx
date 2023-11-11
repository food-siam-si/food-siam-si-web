import { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import PageGuard from '@/modules/User/components/PageGuard';

import { Restaurant } from '../api/dto';
import { RestaurantApi } from '../api/restaurantApi';
import RestaurantDetailCard from '../components/RestaurantDetailCard';

const RestaurantPage = () => {
  const [data, setData] = useState<Restaurant | null>();
  const fetchData = useCallback(async () => {
    setData(await RestaurantApi.getCurrent());
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (data === null) return <Navigate to="/manage/restaurant/edit" replace={true} />;

  return (
    <PageGuard allowOwner>{data && <RestaurantDetailCard restaurant={data} isOwner refetch={fetchData} />}</PageGuard>
  );
};

export default RestaurantPage;
