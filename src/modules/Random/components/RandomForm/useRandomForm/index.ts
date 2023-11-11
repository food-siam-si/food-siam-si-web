import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';
import * as yup from 'yup';

const useRandomForm = (handleSubmit: (types: number[], distance: number) => void, withDistance?: boolean) => {
  const randomFormSchema = yup.object().shape({
    types: yup.array().of(yup.number().required()).required(),
    distance: withDistance ? yup.number().typeError('distance must be number').required() : yup.number(),
  });

  type IRandomFormSchema = yup.InferType<typeof randomFormSchema>;

  const methods = useForm<IRandomFormSchema>({
    criteriaMode: 'all',

    resolver: yupResolver(randomFormSchema),
  });

  const onSubmit = async (data: IRandomFormSchema) => {
    handleSubmit(data.types, data.distance ?? 0);
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useRandomForm;
