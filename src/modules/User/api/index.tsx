import { handleError } from '@/common/utils/handleError';

import type { CreateUserRequest, GetCurrentUserResponse, LoginRequest, LoginResponse } from './dto';

export class AuthApi {
  @handleError({ overrideMessage: { 401: 'email or password is incorrect' } })
  static async login(data: LoginRequest): Promise<LoginResponse> {
    return {
      token: data.email,
    };
  }

  @handleError()
  static async get(): Promise<GetCurrentUserResponse | null> {
    return null;
  }

  @handleError()
  static async create(data: CreateUserRequest): Promise<void> {}
}
