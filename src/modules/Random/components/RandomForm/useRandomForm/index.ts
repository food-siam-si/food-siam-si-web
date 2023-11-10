import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';
import * as yup from 'yup';

const useRandomForm = (handleSubmit: (types: number[]) => void, type: string) => {
  const randomFormSchema = yup.object().shape({
    types: yup.array().of(yup.number().required()).required(),
    distance: type === 'Menu' ? yup.number() : yup.number().typeError('distance must be number').required(),
  });

  type IRandomFormSchema = yup.InferType<typeof randomFormSchema>;

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
