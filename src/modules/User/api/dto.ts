export enum UserType {
  Customer = 'Customer',
  Owner = 'Owner',
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface GetCurrentUserResponse {
  role: UserType;
  id: number;
  username: string;
}

export interface CreateUserRequest {
  email: string;
  username: string;
  password: string;
  userType: UserType;
}
