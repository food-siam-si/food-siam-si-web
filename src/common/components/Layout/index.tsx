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
      <Container maxWidth="md" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>
      <div style={{ backgroundColor: 'red' }}>footer</div>
    </RootContainer>
  );
};

export default Layout;
