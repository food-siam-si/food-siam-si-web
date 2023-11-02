import { CardContent, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { ReviewApi } from '../../api';
import { GetReviewsDto } from '../../api/dto';
import ReviewCard from '../ReviewCard';
import { ReviewSectionProps } from './types';

const ReviewSection = ({ restaurantId }: ReviewSectionProps) => {
  const [reviews, setReviews] = React.useState<GetReviewsDto[]>();

  useEffect(() => {
    const fetchReviews = async () => {
      setReviews(await ReviewApi.get(restaurantId));
    };
    fetchReviews();
  }, [restaurantId]);

  if (!reviews) return null;

  return (
    <CardContent>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Reviews
      </Typography>
      <Stack gap={2}>
        {reviews.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Stack>
    </CardContent>
  );
};

export default ReviewSection;
