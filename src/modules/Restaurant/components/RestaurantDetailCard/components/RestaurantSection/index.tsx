import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MapIcon from '@mui/icons-material/Map';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Button, CardContent, Chip, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import { Restaurant } from '@/modules/Restaurant/api/dto';
import { parseAveragePrice } from '@/modules/Restaurant/utils/parseAveragePrice';

import DetailChip from '../DetailChip';

const RestaurantSection = (data: Restaurant) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const { name, restaurantType, description, locationLat, locationLong, phoneNumber, averagePrice } = data;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${locationLat},${locationLong}`;
  return (
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 0.5 }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
        {isDesktop ? (
          <Button variant="contained" startIcon={<MapIcon />} href={mapLink}>
            Open Map
          </Button>
        ) : (
          <IconButton
            href={mapLink}
            sx={{
              backgroundColor: 'primary.main',
              ':hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <MapIcon sx={{ color: (theme) => theme.palette.primary.contrastText }} />
          </IconButton>
        )}
      </Stack>
      <Stack
        direction={isDesktop ? 'row' : 'column'}
        columnGap={1}
        sx={{ mb: isDesktop ? 0.75 : 1.5 }}
        flexWrap="wrap"
        divider={
          <Typography color="text.secondary" sx={{ display: isDesktop ? 'block' : 'none' }}>
            |
          </Typography>
        }
      >
        <DetailChip label="Rating" Icon={StarRoundedIcon} value="5" />
        <DetailChip label="Average Price" Icon={AttachMoneyRoundedIcon} value={parseAveragePrice(averagePrice)} />
        <DetailChip label="Phone Number" Icon={PhoneRoundedIcon} value={phoneNumber} />
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
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
