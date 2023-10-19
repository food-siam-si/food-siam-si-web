import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';
import { useNavigate } from 'react-router-dom';

import { AuthApi } from '@/modules/User/api';
import { useUser } from '@/modules/User/context/userContext';

import { ILoginFormSchema, loginFromSchema } from './schema';

const useLoginForm = () => {
  const methods = useForm<ILoginFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    criteriaMode: 'all',
    resolver: yupResolver(loginFromSchema),
  });

  const navigate = useNavigate();

  const { refetch } = useUser();

  const onSubmit = async (data: ILoginFormSchema) => {
    const res = await AuthApi.login(data);
    if (!res) return;
    localStorage.setItem('token', res.token);
    await refetch();
    navigate('/');
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useLoginForm;
