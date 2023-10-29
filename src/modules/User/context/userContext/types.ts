import { GetCurrentUserResponse } from 'modules/User/api/dto';

export interface IUserContext {
  user: GetCurrentUserResponse | null;
  refetch: () => Promise<void>;
  reset: () => void;
  setUser: (user: GetCurrentUserResponse | null) => void;
}
