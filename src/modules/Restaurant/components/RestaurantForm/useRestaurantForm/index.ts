import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { Restaurant } from '@/modules/Restaurant/api/dto';
import { RestaurantApi } from '@/modules/Restaurant/api/restaurantApi';

import { IRestaurantFormSchema, restaurantFromSchema } from './schema';

const useRestaurantForm = (initialData?: Restaurant) => {
  const { restaurantType, ...rest } = initialData || {};
  const navigate = useNavigate();
  const methods = useForm<IRestaurantFormSchema>({
    criteriaMode: 'all',
    defaultValues: { ...rest, restaurantTypeIds: restaurantType?.map((item) => item.id) },
    resolver: yupResolver(restaurantFromSchema),
  });

  const onSubmit = async (data: IRestaurantFormSchema) => {
    try {
      if (!initialData) {
        await RestaurantApi.create(data);
      } else {
        await RestaurantApi.update({ ...data, isInService: true });
      }

      toast.success('Restaurant saved successfully');
      navigate('/manage/restaurant');
    } catch (e) {
      /* empty */
    }
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useRestaurantForm;
