import { AxiosError } from 'axios';

import { apiClient } from '@/common/libs/axios';
import { handleError } from '@/common/utils/handleError';

import { type CreateUserRequest, type GetCurrentUserResponse, type LoginRequest, type LoginResponse } from './dto';

export class AuthApi {
  @handleError({ overrideMessage: { 401: 'email or password is incorrect' }, throwError: true })
  static async login(data: LoginRequest): Promise<LoginResponse> {
    const res = await apiClient.post('/user/login', data);
    return {
      token: res.data.token,
    };
  }

  @handleError()
  static async get(): Promise<GetCurrentUserResponse | null> {
    try {
      const res = await apiClient.get('/user/me');
      return res.data;
    } catch (e) {
      if ((e as AxiosError).response?.status !== 401) {
        throw e;
      }
      return null;
    }
  }

  @handleError({ throwError: true })
  static async create(data: CreateUserRequest): Promise<void> {
    await apiClient.post('/user/register', data);
  }
}
