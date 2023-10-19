import * as yup from 'yup';

import { UserType } from '@/modules/User/api/dto';

export const signUpFromSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords not match')
    .required('Required'),
  userType: yup.mixed<UserType>().oneOf(Object.values(UserType)).required(),
});

export type ISignUpFormSchema = yup.InferType<typeof signUpFromSchema>;
