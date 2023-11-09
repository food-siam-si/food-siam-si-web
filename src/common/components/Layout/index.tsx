import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/modules/User/context/userContext';

import { RootContainer } from './styled';

const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const { reset } = useUser();

  return (
    <RootContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            FoodSiamSi
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton sx={{ color: 'white' }} onClick={reset}>
            <LogoutIcon />
          </IconButton>
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
