import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Restaurant } from '../api/dto';
import { RestaurantApi } from '../api/restaurantApi';

const RestaurantPage = () => {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<Restaurant | null>();

  useEffect(() => {
    const fetchData = async () => {
      setData(await RestaurantApi.getById(params.id || ''));
    };
    fetchData();
  }, [params.id]);

  if (!data) return null;

  return (
    <>
      Restaurant {params.id} {data.name}
    </>
  );
};

export default RestaurantPage;
