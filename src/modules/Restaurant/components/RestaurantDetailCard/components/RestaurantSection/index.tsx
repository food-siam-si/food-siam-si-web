import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MapIcon from '@mui/icons-material/Map';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Button, CardContent, Chip, Stack, Typography } from '@mui/material';

import { Restaurant } from '@/modules/Restaurant/api/dto';
import { parseAveragePrice } from '@/modules/Restaurant/utils/parseAveragePrice';

import DetailChip from '../DetailChip';

const RestaurantSection = (data: Restaurant) => {
  const { name, restaurantType, description, locationLat, locationLong, phoneNumber, averagePrice } = data;

  return (
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 0.5 }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
        <Button
          variant="contained"
          startIcon={<MapIcon />}
          href={`https://www.google.com/maps/search/?api=1&query=${locationLat},${locationLong}`}
        >
          Open Map
        </Button>
      </Stack>
      <Stack direction="row" gap={1} sx={{ mb: 0.75 }} divider={<Typography color="text.secondary">|</Typography>}>
        <DetailChip label="Rating" Icon={StarRoundedIcon} value="5" />
        <DetailChip label="Average Price" Icon={AttachMoneyRoundedIcon} value={parseAveragePrice(averagePrice)} />
        <DetailChip label="Phone Number" Icon={PhoneRoundedIcon} value={phoneNumber} />
      </Stack>
      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        {restaurantType.map(({ id, name }) => (
          <Chip key={id} label={name} size="small" />
        ))}
      </Stack>

      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  );
};

export default RestaurantSection;
