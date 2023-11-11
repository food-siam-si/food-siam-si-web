import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserType } from '@/modules/User/api/dto';
import withGuard from '@/modules/User/hoc/withGuard';

import { Restaurant } from '../api/dto';
import { RestaurantApi } from '../api/restaurantApi';
import RestaurantDetailCard from '../components/RestaurantDetailCard';

const RestaurantPage = withGuard(() => {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<Restaurant | null>();
  const fetchData = useCallback(async () => {
    setData(await RestaurantApi.getById(params.id || ''));
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!data) return null;

  return <RestaurantDetailCard restaurant={data} refetch={fetchData} />;
}, [UserType.Customer]);

export default RestaurantPage;
