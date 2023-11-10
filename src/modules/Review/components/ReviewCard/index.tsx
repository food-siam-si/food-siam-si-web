import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Card, CardContent, Rating, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';

import { GetReviewsDto } from '../../api/dto';

const ReviewCard = ({ rate, description, writtenDate }: GetReviewsDto) => {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" gap={{ xs: 1, sm: 2 }}>
          <Avatar>
            <PersonIcon />
          </Avatar>
          <Rating name="disabled" value={rate} readOnly sx={{ flexGrow: 1 }} />
          <Typography variant="body2">{format(writtenDate, 'd/M/yy HH:mm')}</Typography>
        </Stack>
        <Typography sx={{ mt: 2 }}> {description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
