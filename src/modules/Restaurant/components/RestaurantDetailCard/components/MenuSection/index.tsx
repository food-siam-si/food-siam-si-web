import { Button, CardContent, Stack, Typography } from '@mui/material';

const MenuSection = () => {
  return (
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Recommended Menu
        </Typography>
        <Button variant="text"> See All</Button>
      </Stack>
    </CardContent>
  );
};

export default MenuSection;
