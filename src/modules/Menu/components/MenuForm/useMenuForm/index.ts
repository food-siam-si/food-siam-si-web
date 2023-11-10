import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form-mui';

import { Menu } from '@/modules/Menu/api/dto';

import { IMenuFormSchema, menuFromSchema } from './schema';

const useMenuForm = (initialData?: Menu) => {
  const methods = useForm<IMenuFormSchema>({
    criteriaMode: 'all',
    defaultValues: {
      ...initialData,
      addons: initialData?.addons.join(', '),
      type: initialData?.type.map((item) => item.id),
    },
    resolver: yupResolver(menuFromSchema),
  });

  const onSubmit = async (data: IMenuFormSchema) => {
    console.log(data);
  };

  return {
    methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
};

export default useMenuForm;
