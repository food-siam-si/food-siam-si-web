import { handleError } from '@/common/utils/handleError';

import { AveragePrice, Restaurant, RestaurantType } from './dto';
const MOCK = {
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
export class RestaurantApi {
  @handleError()
  static async getById(_id: string): Promise<Restaurant> {
    return MOCK;
  }

  static async getCurrent(): Promise<Restaurant> {
    return MOCK;
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
  }
}
