import AddIcon from '@mui/icons-material/Add';
import { Button, Paper, Stack, Typography } from '@mui/material';

import FullMenuCard from '../FullMenuCard';
import { MenuListProps } from './types';

const MenuList = ({ menu, isOwner }: MenuListProps) => {
  return (
    <Paper sx={{ p: 2, m: 2, minWidth: 'min(90%,700px)', minHeight: '70vh', display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Menu
        </Typography>
        {isOwner && (
          <Button variant="contained" startIcon={<AddIcon />} href="/manage/menu/create">
            Create Menu
          </Button>
        )}
      </Stack>
      {menu.length > 0 ? (
        <Stack gap={2} direction="row" flexWrap="wrap">
          {menu.map((item) => (
            <FullMenuCard key={item.id} menu={item} enableEdit={isOwner} />
          ))}
        </Stack>
      ) : (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          No Menu Available
        </Typography>
      )}
    </Paper>
  );
};

export default MenuList;
