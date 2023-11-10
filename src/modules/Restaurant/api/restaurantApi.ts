import { AxiosError } from 'axios';

import { apiClient } from '@/common/libs/axios';
import { handleError } from '@/common/utils/handleError';

import {
  AveragePrice,
  type CreateRestaurantRequest,
  type Restaurant,
  type RestaurantType,
  type UpdateRestaurantRequest,
} from './dto';

export class RestaurantApi {
  @handleError()
  static async getById(id: string): Promise<Restaurant> {
    const res = await apiClient.get(`/restaurant/${id}`);
    return res.data;
  }

  @handleError()
  static async getCurrent(): Promise<Restaurant | null> {
    try {
      const res = await apiClient.get('/restaurant/me');
      return res.data;
    } catch (e) {
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

  static async random(types: number[]): Promise<Restaurant> {
    return {
      rating: 4.5,
      id: 1,
      name: 'Restaurant',
      description:
        'Restaurant description lorem ipsum dolor sit amet Restaurant description lorem ipsum dolor sit amet Restaurant description lorem ipsum dolor sit amet Restaurant description lorem ipsum dolor sit amet',
      phoneNumber: '0123456789',
      locationLat: 10.123456,
      locationLong: 10.123456,
      averagePrice: AveragePrice.HundredToTwoHundred,
      imageUrl: 'https://picsum.photos/1600/900',
      restaurantType: [
        {
          id: 1,
          name: 'Restaurant type 1',
        },
        {
          id: 2,
          name: 'Restaurant type 2',
        },
      ],
    };
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
