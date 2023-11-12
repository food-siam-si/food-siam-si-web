import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form-mui';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { MenuApi } from '@/modules/Menu/api';
import { Menu } from '@/modules/Menu/api/dto';

import { IMenuFormSchema, menuFromSchema } from './schema';

const useMenuForm = (initialData?: Menu) => {
  const navigate = useNavigate();
  const methods = useForm<IMenuFormSchema>({
    criteriaMode: 'all',
    defaultValues: {
      ...initialData,
      addons: initialData?.addons.map(({ addons }) => addons).join(','),
      type: initialData?.types.map((item) => item.id),
    },
    resolver: yupResolver(menuFromSchema),
  });

  const onDelete = useCallback(async () => {
    if (!initialData) return;
    try {
      await MenuApi.delete(initialData.id);
      toast.success('Delete menu successfully');
      navigate('/manage/menu');
    } catch (e) {
      /* empty */
    }
  }, [initialData, navigate]);

  const onSubmit = async (data: IMenuFormSchema) => {
    const { type, isRecommended, addons, ...rest } = data;
    const formatted = {
      ...rest,
      typesId: type,
      isRecommended: isRecommended ?? false,
      addons: addons
        ? addons
            .split(',')
            .filter((value) => value.trim() != '')
            .map((val) => val.trim())
        : [],
    };

    try {
      if (initialData) {
        await MenuApi.update(initialData.id, formatted);
      } else {
        await MenuApi.create(formatted);
      }
      toast.success(`Menu ${initialData ? 'edited' : 'created'} successfully`);
      navigate('/manage/menu');
    } catch (e) {
      /* empty */
    }
  };

  return { onDelete, methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useMenuForm;
