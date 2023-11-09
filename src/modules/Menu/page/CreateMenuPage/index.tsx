import MenuForm from '@/modules/Menu/components/MenuForm';
import PageGuard from '@/modules/User/components/PageGuard';

const CreateMenuPage = () => {
  return (
    <PageGuard allowOwner>
      <MenuForm />
    </PageGuard>
  );
};

export default CreateMenuPage;
