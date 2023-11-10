import { useEffect, useState } from 'react';

import PageGuard from '@/modules/User/components/PageGuard';

import { Restaurant } from '../api/dto';
import { RestaurantApi } from '../api/restaurantApi';
import RestaurantForm from '../components/RestaurantForm';

const EditRestaurantPage = () => {
  const [data, setData] = useState<Restaurant | null>();

  useEffect(() => {
    const fetchData = async () => {
      setData(await RestaurantApi.getCurrent());
    };
    fetchData();
  }, []);

  if (data === undefined) return null;
  return (
    <PageGuard allowOwner>
      <RestaurantForm initialData={data ? data : undefined} />
    </PageGuard>
  );
};

export default EditRestaurantPage;
