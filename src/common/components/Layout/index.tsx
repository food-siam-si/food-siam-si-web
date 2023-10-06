import { PropsWithChildren } from 'react';

import { ContentContainer, RootContainer } from './styled';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <RootContainer>
      <div style={{ backgroundColor: 'blue' }}>Header</div>
      <ContentContainer>{children}</ContentContainer>
      <div style={{ backgroundColor: 'red' }}>footer</div>
    </RootContainer>
  );
};

export default Layout;
