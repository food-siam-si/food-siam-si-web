import * as yup from 'yup';

export const randomFormSchema = yup.object().shape({
  types: yup.array().of(yup.number().required()).required(),
});

export type IRandomFormSchema = yup.InferType<typeof randomFormSchema>;
