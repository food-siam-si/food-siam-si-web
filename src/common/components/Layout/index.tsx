import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

import { RootContainer } from './styled';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <RootContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FoodSiamSi
          </Typography>
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
