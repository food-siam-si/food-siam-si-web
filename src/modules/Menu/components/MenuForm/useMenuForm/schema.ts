import * as yup from 'yup';

export const menuFromSchema = yup.object().shape({
  isRecommended: yup.boolean(),
  title: yup.string().required(),
  description: yup.string().required(),
  imageUrl: yup.string().url().required(),
  price: yup.number().positive().typeError('Price must be a number').required(),
  type: yup.array().of(yup.number().required()).required(),
  addons: yup.string(),
});

export type IMenuFormSchema = yup.InferType<typeof menuFromSchema>;
