import { Paper, Stack, Typography } from '@mui/material';

import FullMenuCard from '../FullMenuCard';
import { MenuListProps } from './types';

const MenuList = ({ menu, isOwner }: MenuListProps) => {
  return (
    <Paper sx={{ p: 2, m: 2, minWidth: 'min(90%,700px)', minHeight: '70vh' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Menu
      </Typography>
      <Stack gap={2} direction="row" flexWrap="wrap">
        {menu.map((item) => (
          <FullMenuCard key={item.id} menu={item} enableEdit={isOwner} />
        ))}
      </Stack>
    </Paper>
  );
};

export default MenuList;
