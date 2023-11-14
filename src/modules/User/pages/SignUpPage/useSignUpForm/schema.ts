import * as yup from 'yup';

import { UserType } from '@/modules/User/api/dto';

export const signUpFromSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .min(8)
    .oneOf([yup.ref('password'), undefined], 'passwords not match')
    .required(),
  userType: yup.mixed<UserType>().oneOf(Object.values(UserType)).required(),
});

export type ISignUpFormSchema = yup.InferType<typeof signUpFromSchema>;
