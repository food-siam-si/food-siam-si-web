export interface GetReviewsDto {
  id: number;
  userId: number;
  restaurantId: number;
  description: string;
  rate: number;
  writtenDate: Date;
}
