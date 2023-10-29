import * as yup from 'yup';

export const loginFromSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export type ILoginFormSchema = yup.InferType<typeof loginFromSchema>;
