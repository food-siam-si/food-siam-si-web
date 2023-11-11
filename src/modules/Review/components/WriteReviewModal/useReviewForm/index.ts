import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';

import { ReviewApi } from '@/modules/Review/api';

import { IReviewFormSchema, reviewFormSchema } from './schema';

const useReviewForm = (restaurantId: number, handleSuccess: () => void) => {
  const methods = useForm<IReviewFormSchema>({
    criteriaMode: 'all',

    resolver: yupResolver(reviewFormSchema),
  });

  const onSubmit = async (data: IReviewFormSchema) => {
    await ReviewApi.createReview(restaurantId, { description: data.description, rate: data.rating });
    handleSuccess();
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useReviewForm;
