import { apiClient } from '@/common/libs/axios';
import { handleError } from '@/common/utils/handleError';

import { Restaurant, RestaurantType } from './dto';

export class RestaurantApi {
  @handleError()
  static async getById(_id: string): Promise<Restaurant> {
    return await apiClient.get(`/restaurant/${_id}`);
  }

  static async getCurrent(): Promise<Restaurant> {
    return await apiClient.get('/restaurant/me');
  }

  @handleError()
  static async getTypes(): Promise<RestaurantType[]> {
    return [
      {
        id: 1,
        name: 'Restaurant type 1',
      },
      {
        id: 2,
        name: 'Restaurant type 2',
      },
    ];
    // return await apiClient.get('/restaurant/type');
  }

  static async random(types: number[]): Promise<Restaurant> {
    return await apiClient.get('/restaurant/random', { params: { types } });
  }
}
