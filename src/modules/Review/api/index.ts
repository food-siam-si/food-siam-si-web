import { apiClient } from '@/common/libs/axios';
import { handleError } from '@/common/utils/handleError';

import type { CreateReviewsDto, GetReviewsDto } from './dto';

export class ReviewApi {
  @handleError()
  static async get(restaurantId: number): Promise<GetReviewsDto[]> {
    const res = await apiClient.get(`/review/${restaurantId}`);
    return res.data.map((review: GetReviewsDto) => ({ ...review, writtenDate: new Date(review.writtenDate) }));
  }

  @handleError({ overrideMessage: { 409: 'You have already reviewed this restaurant' } })
  static async createReview(restaurantId: number, review: CreateReviewsDto): Promise<void> {
    await apiClient.post(`/review/${restaurantId}`, review);
  }
}
