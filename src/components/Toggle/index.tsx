import React from 'react';

import {Container, ToggleSelector, ToggleLabel} from './styles';

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector 
      checked      
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => {}}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default Toggle;