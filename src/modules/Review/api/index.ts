import { apiClient } from '@/common/libs/axios';
import { handleError } from '@/common/utils/handleError';

import type { CreateReviewsDto, GetReviewsDto } from './dto';

export class ReviewApi {
  @handleError()
  static async get(restaurantId: number): Promise<GetReviewsDto[]> {
    const res = await apiClient.get(`/review/${restaurantId}`);
    return res.data;
  }

  @handleError()
  static async createReview(restaurantId: number, review: CreateReviewsDto): Promise<void> {
    await apiClient.post(`/review/${restaurantId}`, review);
    return;
  }
}
