import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AuthApi } from '@/modules/User/api';

import { ISignUpFormSchema, signUpFromSchema } from './schema';

const useSignUpForm = () => {
  const methods = useForm<ISignUpFormSchema>({
    criteriaMode: 'all',
    resolver: yupResolver(signUpFromSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: ISignUpFormSchema) => {
    const { confirmPassword: _, ...rest } = data;
    await AuthApi.create(rest);
    toast.success('Sign up successfully');
    navigate('/login');
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useSignUpForm;
