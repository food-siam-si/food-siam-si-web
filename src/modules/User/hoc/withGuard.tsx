import React from 'react';
import { Navigate } from 'react-router-dom';

import { UserType } from '../api/dto';
import { useUser } from '../context/userContext';

const withGuard = (WrappedComponent: React.ComponentType, allowedType?: UserType[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WithGuard = (props: any) => {
    const { user } = useUser();

    if (!user) return <Navigate to="/login" replace />;
    if (!allowedType?.includes(user.type)) return <Navigate to="/" replace />;

    return <WrappedComponent {...props} />;
  };

  return WithGuard;
};

export default withGuard;
