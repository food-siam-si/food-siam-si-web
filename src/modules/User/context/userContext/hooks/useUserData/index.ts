import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthApi } from '@/modules/User/api';
import { GetCurrentUserResponse } from '@/modules/User/api/dto';

const useUserData = () => {
  const [user, setUser] = useState<GetCurrentUserResponse | null>(null);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  const refetch = useCallback(async () => {
    const res = await AuthApi.get();

    setUser(res);
    setLoading(false);
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem('token');
    setUser(null);
  }, []);

  useEffect(() => {
    if (['/500', '/404'].includes(location.pathname)) return;
    else if (!user) {
      refetch();
    }
  }, [location.pathname, refetch, user]);

  return { user, isLoading, refetch, reset, setUser };
};

export default useUserData;
