import { Button, Dialog, DialogContent, DialogTitle, Rating, Stack, Typography } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

import { WriteReviewModalProps } from './types';

const WriteReviewModal = ({ open, onClose, restaurantId }: WriteReviewModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <FormContainer
        onSuccess={(data) => {
          console.log(data);
          onClose();
        }}
      >
        <DialogTitle>Write Review</DialogTitle>
        <DialogContent>
          <Stack gap={2}>
            <Stack direction="row" gap={2}>
              <Typography>Rating</Typography>
              <Rating />
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
