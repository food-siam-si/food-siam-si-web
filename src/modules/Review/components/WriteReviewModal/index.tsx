import { Button, Dialog, DialogContent, DialogTitle, Rating, Stack, Typography } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

import { WriteReviewModalProps } from './types';
import useReviewForm from './useReviewForm';

const WriteReviewModal = ({ open, onClose, restaurantId }: WriteReviewModalProps) => {
  const { methods, onSubmit } = useReviewForm(restaurantId);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <FormContainer formContext={methods} handleSubmit={onSubmit}>
        <DialogTitle>Write Review</DialogTitle>
        <DialogContent>
          <Stack gap={2}>
            <Stack gap={1}>
              <Stack direction="row" gap={2}>
                <Typography>Rating</Typography>
                <Rating
                  value={methods.getValues('rating')}
                  onChange={(_, newValue) => {
                    methods.setValue('rating', newValue ?? 0);
                  }}
                />
              </Stack>
              {methods.formState.errors.rating && (
                <Typography color="error" variant="caption">
                  rating is a required field
                </Typography>
              )}
            </Stack>
            <TextFieldElement name="description" label="Description" required multiline rows={3} />
          </Stack>
          <Button type="submit" variant="contained" sx={{ mt: 2, float: 'right' }}>
            Submit
          </Button>
        </DialogContent>
      </FormContainer>
    </Dialog>
  );
};

export default WriteReviewModal;
