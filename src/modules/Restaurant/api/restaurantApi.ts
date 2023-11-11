import { AxiosError } from 'axios';

import { apiClient } from '@/common/libs/axios';
import { handleError } from '@/common/utils/handleError';

import type {
  CreateRestaurantRequest,
  RandomRestaurantRequest,
  Restaurant,
  RestaurantType,
  UpdateRestaurantRequest,
} from './dto';

export class RestaurantApi {
  @handleError()
  static async getById(id: string): Promise<Restaurant> {
    const res = await apiClient.get(`/restaurant/${id}`);
    return res.data;
  }

  @handleError()
  static async getCurrent(disableBypassNotfound?: boolean): Promise<Restaurant | null> {
    try {
      const res = await apiClient.get('/restaurant/me');
      return res.data;
    } catch (e) {
      if (disableBypassNotfound) throw e;
      if ((e as AxiosError).response?.status !== 404) {
        throw e;
      }
      return null;
    }
  }

  @handleError()
  static async getTypes(): Promise<RestaurantType[]> {
    const res = await apiClient.get('/restaurant/type');
    return res.data.restaurantTypes;
  }

  static async random(params: RandomRestaurantRequest): Promise<Restaurant> {
    return await apiClient.get('/restaurant/random', { params });
  }

  @handleError({ throwError: true })
  static async create(data: CreateRestaurantRequest) {
    return await apiClient.post('/restaurant', data);
  }

  @handleError({ throwError: true })
  static async update(data: UpdateRestaurantRequest) {
    return await apiClient.put(`/restaurant/me`, data);
  }
}
