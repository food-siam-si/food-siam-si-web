import * as yup from 'yup';

export const reviewFormSchema = yup.object().shape({
  rating: yup.number().required(),
  description: yup.string().required(),
});

export type IReviewFormSchema = yup.InferType<typeof reviewFormSchema>;
