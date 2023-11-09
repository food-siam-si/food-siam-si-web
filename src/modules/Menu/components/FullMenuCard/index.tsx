import { Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';

import { Menu } from '../../api/dto';

const FullMenuCard = (menu: Menu) => {
  const { imageUrl, title, description, type, addons } = menu;
  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: '100%' }}>
      <CardMedia
        sx={{ width: { xs: 'auto', sm: 100 }, height: { xs: 100, sm: 'auto' }, objectFit: 'cover', flexShrink: 0 }}
        image={imageUrl}
        title={menu.title}
      />
      <CardContent sx={{ p: 1, pb: '8px !important', height: 'calc(100% - 110px)', flexGrow: 1 }}>
        <Stack height="100%">
          <Stack direction="row" gap={1} mb={0.5} alignItems="center">
            <Typography variant="h6">{title}</Typography>
            <Stack direction="row" gap={0.75}>
              {type.map(({ id, name }) => (
                <Chip key={id} label={name} size="small" />
              ))}
            </Stack>
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
            {description}
          </Typography>

          <Stack direction="row" gap={0.75} mt={1} alignItems="center" flexWrap="wrap">
            {addons.length > 0 && (
              <>
                <Typography variant="body2">Addons</Typography>
                {addons.map((name, idx) => (
                  <Chip
                    key={idx}
                    label={
                      <Typography color="primary" variant="caption">
                        +{' '}
                        <Typography color="text.primary" display="inline" variant="inherit">
                          {name}
                        </Typography>
                      </Typography>
                    }
                    size="small"
                  />
                ))}
              </>
            )}
            <Typography color="primary" sx={{ flexGrow: 1, textAlign: 'right' }}>
              {menu.price} ฿
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FullMenuCard;
