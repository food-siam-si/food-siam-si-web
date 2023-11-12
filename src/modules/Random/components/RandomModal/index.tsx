import { Chip, Dialog, Divider, Link, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { MenuApi } from '@/modules/Menu/api';
import { Menu } from '@/modules/Menu/api/dto';
import FullMenuCard from '@/modules/Menu/components/FullMenuCard';

import RandomForm from '../RandomForm';
import { RandomModalProps } from './types';

const RandomModal = ({ open, onClose, restaurant }: RandomModalProps) => {
  const [menu, setMenu] = useState<Menu>();

  if (!restaurant) return null;

  const handleSubmit = async (data: number[]) => {
    setMenu(await MenuApi.random(restaurant.id, data));
  };

  const { imageUrl } = restaurant;

  const handleClose = () => {
    onClose();
    setMenu(undefined);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <Stack alignItems="stretch" sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'center' }} color="priamry">
          Random Result
        </Typography>
        <Link href={`/restaurants/${restaurant.id}`}>
          <Paper
            sx={{
              height: '150px',
              overflow: 'hidden',
              position: 'relative',
              my: 1,
              mb: 2,
            }}
          >
            <img src={imageUrl} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            <div
              style={{
                width: '100%',
                position: 'absolute',
                top: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))',
                height: '100px',
              }}
            />
            <Typography variant="h5" sx={{ position: 'absolute', top: 0, mx: 1, my: 0.5 }} color="white">
              {restaurant.name}
            </Typography>
            <Chip
              sx={{
                position: 'absolute',
                bottom: 0,
                mx: 1,
                right: 0,
                color: '#FFFFFFDD',
                m: 0.5,
                backgroundColor: '#00000055',
              }}
              label="View Details >"
              size="small"
            />
          </Paper>
        </Link>
        {menu ? (
          <FullMenuCard menu={menu} />
        ) : (
          <>
            <Divider />
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 1 }}>
              Don't know what to eat?
            </Typography>
            <RandomForm
              fetchTypes={() => MenuApi.getTypesByRestaurantId(restaurant.id)}
              handleSubmit={handleSubmit}
              label="Menu"
            />
          </>
        )}
      </Stack>
    </Dialog>
  );
};

export default RandomModal;
