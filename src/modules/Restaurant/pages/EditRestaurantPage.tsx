import { useEffect, useState } from 'react';

import { UserType } from '@/modules/User/api/dto';
import withGuard from '@/modules/User/hoc/withGuard';

import { Restaurant } from '../api/dto';
import { RestaurantApi } from '../api/restaurantApi';
import RestaurantForm from '../components/RestaurantForm';

const EditRestaurantPage = withGuard(() => {
  const [data, setData] = useState<Restaurant | null>();

  useEffect(() => {
    const fetchData = async () => {
      setData(await RestaurantApi.getCurrent());
    };
    fetchData();
  }, []);

  if (data === undefined) return null;

  return <RestaurantForm initialData={data ? data : undefined} />;
}, [UserType.Owner]);

export default EditRestaurantPage;
