import { AppBar, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

import { ContentContainer, RootContainer } from './styled';

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
      <ContentContainer>{children}</ContentContainer>
      <div style={{ backgroundColor: 'red' }}>footer</div>
    </RootContainer>
  );
};

export default Layout;
