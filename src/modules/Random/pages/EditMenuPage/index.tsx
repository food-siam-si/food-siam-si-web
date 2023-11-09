import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MenuApi } from '@/modules/Menu/api';
import { Menu } from '@/modules/Menu/api/dto';
import MenuForm from '@/modules/Menu/components/MenuForm';

const EditMenuPage = () => {
  const params = useParams<{ id: string }>();

  const [data, setData] = useState<Menu | null>();

  useEffect(() => {
    const fetchData = async () => {
      setData(await MenuApi.getById(Number(params.id)));
    };
    fetchData();
  }, [params.id]);

  if (data === undefined) return null;
  return <MenuForm initialData={data} />;
};

export default EditMenuPage;
