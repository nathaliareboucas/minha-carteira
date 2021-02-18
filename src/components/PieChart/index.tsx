import React from 'react';
// import {PieChart , Pie, Cell, ResponsiveContainer} from 'recharts';

import {Container, SideLeft, LegendContainer, Legend, SideRight} from './styles';

const PieChart: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend color="#4E41F0">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>

        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>

        <Legend color="#4E41F0">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>

        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>

        <Legend color="#4E41F0">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>

        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>

        <Legend color="#4E41F0">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>

        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>

    <SideRight>
      
    </SideRight>
  </Container>
);

export default PieChart;