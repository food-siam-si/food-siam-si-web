import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';

import { IReviewFormSchema, reviewFormSchema } from './schema';

const useReviewForm = (restaurantId: number) => {
  const methods = useForm<IReviewFormSchema>({
    criteriaMode: 'all',

    resolver: yupResolver(reviewFormSchema),
  });

  const onSubmit = async (data: IReviewFormSchema) => {
    console.log(data);
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useReviewForm;
