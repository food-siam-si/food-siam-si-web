import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/modules/User/context/userContext';

import { RootContainer } from './styled';

const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const { reset, user } = useUser();

  return (
    <RootContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            FoodSiamSi
          </Typography>
          <div style={{ flexGrow: 1 }} />

          {user && (
            <Stack direction="row" alignItems="center" gap={1}>
              <AccountCircleIcon />
              <Typography color="white">{user.username}</Typography>
              <IconButton sx={{ color: 'white' }} onClick={reset}>
                <LogoutIcon />
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          py: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Container>
    </RootContainer>
  );
};

export default Layout;
