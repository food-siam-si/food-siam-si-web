import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PageGuard from '@/modules/User/components/PageGuard';

import { Restaurant } from '../api/dto';
import { RestaurantApi } from '../api/restaurantApi';
import RestaurantDetailCard from '../components/RestaurantDetailCard';

const RestaurantPage = () => {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<Restaurant | null>();
  const fetchData = useCallback(async () => {
    setData(await RestaurantApi.getById(params.id || ''));
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!data) return null;

  return (
    <PageGuard allowCustomer>
      <RestaurantDetailCard restaurant={data} refetch={fetchData} />
    </PageGuard>
  );
};

export default RestaurantPage;
