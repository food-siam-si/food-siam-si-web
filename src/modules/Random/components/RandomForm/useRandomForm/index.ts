import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';

import { IRandomFormSchema, randomFormSchema } from './schema';

const useRandomForm = (handleSubmit: (types: number[]) => void) => {
  const methods = useForm<IRandomFormSchema>({
    criteriaMode: 'all',

    resolver: yupResolver(randomFormSchema),
  });

  const onSubmit = async (data: IRandomFormSchema) => {
    console.log(data);
    handleSubmit(data.types);
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useRandomForm;
