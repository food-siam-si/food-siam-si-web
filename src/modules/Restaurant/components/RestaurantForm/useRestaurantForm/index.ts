import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';

import { Restaurant } from '@/modules/Restaurant/api/dto';

import { IRestaurantFormSchema, restaurantFromSchema } from './schema';

const useRestaurantForm = (initialData?: Restaurant) => {
  const { restaurantType, ...rest } = initialData || {};
  const methods = useForm<IRestaurantFormSchema>({
    criteriaMode: 'all',
    defaultValues: { ...rest, restaurantTypeIds: restaurantType?.map((item) => item.id) },
    resolver: yupResolver(restaurantFromSchema),
  });

  const onSubmit = async (data: IRestaurantFormSchema) => {
    console.log(data);
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useRestaurantForm;
