import React from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark'
import light from './styles/themes/light';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
  return(
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default App;