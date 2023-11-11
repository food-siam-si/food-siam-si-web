import MenuForm from '@/modules/Menu/components/MenuForm';
import { UserType } from '@/modules/User/api/dto';
import withGuard from '@/modules/User/hoc/withGuard';

const CreateMenuPage = withGuard(() => {
  return <MenuForm />;
}, [UserType.Owner]);

export default CreateMenuPage;
