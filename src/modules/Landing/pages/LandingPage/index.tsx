import { Navigate } from 'react-router-dom';

import { UserType } from '@/modules/User/api/dto';
import { useUser } from '@/modules/User/context/userContext';

const LandingPage = () => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  } else if (user.role === UserType.Owner) {
    return <Navigate to="/restaurant" replace={true} />;
  } else {
    return <Navigate to="/random" replace={true} />;
  }
};

export default LandingPage;
