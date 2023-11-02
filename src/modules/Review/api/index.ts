import { handleError } from '@/common/utils/handleError';

import { GetReviewsDto } from './dto';

export class ReviewApi {
  @handleError()
  static async get(restaurantId: number): Promise<GetReviewsDto[]> {
    return [
      {
        id: 1,
        userId: 1,
        restaurantId: 1,
        description: 'description',
        rate: 5,
        writtenDate: new Date(),
      },
      {
        id: 2,
        userId: 2,
        restaurantId: 1,
        description: 'description',
        rate: 4,
        writtenDate: new Date(),
      },
    ];
  }
}
