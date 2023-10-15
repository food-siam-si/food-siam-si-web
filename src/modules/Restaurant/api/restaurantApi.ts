import { handleError } from '@/common/utils/handleError';

import { AveragePrice, Restaurant } from './dto';

export class RestaurantApi {
  @handleError()
  static async getById(_id: string): Promise<Restaurant> {
    return {
      name: 'Restaurant',
      description: 'Restaurant description',
      phoneNumber: '0123456789',
      locationLat: 10.123456,
      locationLong: 10.123456,
      averagePrice: AveragePrice.HundredToTwoHundred,
      imageUrl: 'https://picsum.photos/200/300',
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
}
