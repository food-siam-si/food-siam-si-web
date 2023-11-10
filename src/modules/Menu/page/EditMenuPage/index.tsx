import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MenuApi } from '@/modules/Menu/api';
import { Menu } from '@/modules/Menu/api/dto';
import MenuForm from '@/modules/Menu/components/MenuForm';
import PageGuard from '@/modules/User/components/PageGuard';

const EditMenuPage = () => {
  const params = useParams<{ id: string }>();

  const [data, setData] = useState<Menu>();

  useEffect(() => {
    const fetchData = async () => {
      setData(await MenuApi.getById(Number(params.id)));
    };
    fetchData();
  }, [params.id]);

  return <PageGuard allowOwner>{data && <MenuForm initialData={data} />}</PageGuard>;
};

export default EditMenuPage;
