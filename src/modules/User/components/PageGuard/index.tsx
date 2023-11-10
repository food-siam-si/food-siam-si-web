import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { UserType } from '../../api/dto';
import { useUser } from '../../context/userContext';
import { PageGuardProps } from './types';

const PageGuard = ({ allowOwner, allowCustomer, children }: PropsWithChildren<PageGuardProps>) => {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" />;
  if (!allowOwner && user.type === UserType.Owner) return <Navigate to="/" />;
  if (!allowCustomer && user.type === UserType.Customer) return <Navigate to="/" />;
  return children;
};

export default PageGuard;
