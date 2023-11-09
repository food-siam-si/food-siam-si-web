import CreateIcon from '@mui/icons-material/Create';
import { Button, CardContent, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { ReviewApi } from '../../api';
import { GetReviewsDto } from '../../api/dto';
import ReviewCard from '../ReviewCard';
import WriteReviewModal from '../WriteReviewModal';
import { ReviewSectionProps } from './types';

const ReviewSection = ({ restaurantId }: ReviewSectionProps) => {
  const [reviews, setReviews] = React.useState<GetReviewsDto[]>();
  const [open, setOpen] = React.useState(false);

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
      <Button
        variant="contained"
        startIcon={<CreateIcon />}
        sx={{ mt: 2, float: 'right' }}
        onClick={() => {
          setOpen(true);
        }}
      >
        Write Review
      </Button>
      <WriteReviewModal
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        restaurantId={restaurantId}
      />
    </CardContent>
  );
};

export default ReviewSection;
