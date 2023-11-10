import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthApi } from '@/modules/User/api';
import { GetCurrentUserResponse } from '@/modules/User/api/dto';

const useUserData = () => {
  const [user, setUser] = useState<GetCurrentUserResponse | null>(null);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  const refetch = useCallback(async () => {
    let res;
    if (['/500', '/404'].includes(location.pathname)) {
      res = null;
    } else {
      res = await AuthApi.get();
    }

    setUser(res);
    setLoading(false);
  }, [location.pathname]);

  const reset = useCallback(() => {
    window.localStorage.removeItem('token');
    setUser(null);
  }, []);

  useEffect(() => {
    refetch();
  }, [location.pathname, refetch]);

  return { user, isLoading, refetch, reset, setUser };
};

export default useUserData;
