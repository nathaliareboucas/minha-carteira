import React from 'react';

import {Container, Content} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {

  const options = [
    {value: 'Maria', label: 'Maria'},
    {value: 'João', label: 'João'},
  ];

  return(
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options}/>
      </ContentHeader>
      
      <Content>
        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>

        <HistoryFinanceCard tagColor="#E44C4E" 
          title="Conta de luz" subtitle="08/02/2021" amount="R$ 70,00"/>
      </Content>
    </Container>
  );
}

export default List;