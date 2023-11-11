import CreateIcon from '@mui/icons-material/Create';
import { Button, CardContent, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect } from 'react';

import { ReviewApi } from '../../api';
import { GetReviewsDto } from '../../api/dto';
import ReviewCard from '../ReviewCard';
import WriteReviewModal from '../WriteReviewModal';
import { ReviewSectionProps } from './types';

const ReviewSection = ({ restaurantId, enableReview, refetch }: ReviewSectionProps) => {
  const [reviews, setReviews] = React.useState<GetReviewsDto[]>();
  const [open, setOpen] = React.useState(false);
  const fetchReviews = useCallback(async () => {
    setReviews(await ReviewApi.get(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  if (!reviews) return null;

  return (
    <CardContent>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Reviews
      </Typography>
      {reviews.length > 0 ? (
        <Stack gap={2}>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </Stack>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No reviews yet
        </Typography>
      )}
      {enableReview && (
        <>
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
          {open && (
            <WriteReviewModal
              onClose={() => {
                setOpen(false);
              }}
              open={open}
              refetch={() => {
                fetchReviews();
                refetch();
              }}
              restaurantId={restaurantId}
            />
          )}
        </>
      )}
    </CardContent>
  );
};

export default ReviewSection;
