import { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { UserType } from '@/modules/User/api/dto';
import withGuard from '@/modules/User/hoc/withGuard';

import { Restaurant } from '../api/dto';
import { RestaurantApi } from '../api/restaurantApi';
import RestaurantDetailCard from '../components/RestaurantDetailCard';

const RestaurantPage = withGuard(() => {
  const [data, setData] = useState<Restaurant | null>();
  const fetchData = useCallback(async () => {
    setData(await RestaurantApi.getCurrent());
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (data === null) return <Navigate to="/manage/restaurant/edit" replace={true} />;
  if (!data) return null;

  return <RestaurantDetailCard restaurant={data} isOwner refetch={fetchData} />;
}, [UserType.Owner]);

export default RestaurantPage;
