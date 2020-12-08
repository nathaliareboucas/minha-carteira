import React from 'react';

import {GridLayout} from './styles';
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = () => {
  return(
    <GridLayout>
      <MainHeader />
      <Aside />
      <Content />
    </GridLayout>
  );
};

export default Layout;