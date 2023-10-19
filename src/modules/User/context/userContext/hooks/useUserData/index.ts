import { useCallback, useEffect, useState } from 'react';

import { AuthApi } from '@/modules/User/api';
import { GetCurrentUserResponse } from '@/modules/User/api/dto';

const useUserData = () => {
  const [user, setUser] = useState<GetCurrentUserResponse | null>(null);
  const [isLoading, setLoading] = useState(true);

  const refetch = useCallback(async () => {
    const res = await AuthApi.getUser();
    setUser(res);
    setLoading(false);
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem('token');
    setUser(null);
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { user, isLoading, refetch, reset, setUser };
};

export default useUserData;
