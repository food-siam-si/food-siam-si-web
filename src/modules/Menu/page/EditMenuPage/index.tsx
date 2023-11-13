import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MenuApi } from '@/modules/Menu/api';
import { Menu } from '@/modules/Menu/api/dto';
import MenuForm from '@/modules/Menu/components/MenuForm';
import { UserType } from '@/modules/User/api/dto';
import withGuard from '@/modules/User/hoc/withGuard';

const EditMenuPage = withGuard(() => {
  const params = useParams<{ id: string }>();

  const [data, setData] = useState<Menu>();

  useEffect(() => {
    const fetchData = async () => {
      setData(await MenuApi.getSelfMenuInfo(Number(params.id)));
    };
    fetchData();
  }, [params.id]);

  if (!data) return null;

  return <MenuForm initialData={data} />;
}, [UserType.Owner]);

export default EditMenuPage;
