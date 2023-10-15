import { Stack, Typography } from '@mui/material';

import { DetailChipProps } from './types';

const DetailChip = ({ label, Icon, value }: DetailChipProps) => {
  return (
    <Stack direction="row" alignItems="center">
      <Icon color="primary" fontSize="small" />
      <Typography variant="body2" color="primary" sx={{ mr: 1 }}>
        {label}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Stack>
  );
};

export default DetailChip;
