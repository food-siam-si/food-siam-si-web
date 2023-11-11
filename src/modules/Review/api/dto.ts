export interface GetReviewsDto {
  id: number;
  description: string;
  rate: number;
  writtenDate: Date;
}

export interface CreateReviewsDto {
  description: string;
  rate: number;
}
