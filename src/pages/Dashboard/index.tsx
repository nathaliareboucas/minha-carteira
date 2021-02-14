import React, {useState, useMemo} from 'react';

import {Container, Content} from  './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

const Dashboard: React.FC = () => {

  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const options = [
    {value: 'Maria', label: 'Maria'},
    {value: 'João', label: 'João'},
  ];

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }    
    });    
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error('invalid month value.');
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error('invalid year value.');
    }
  };

  return(
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput 
            options={months} 
            onChange={(event) => handleMonthSelected(event.target.value)}
            defaultValue={monthSelected}
          />
          <SelectInput 
            options={years}
            onChange={(event) => handleYearSelected(event.target.value)}
            defaultValue={yearSelected}
          />
      </ContentHeader>

      <Content>
        <WalletBox 
          title="Saldo"
          amount={150.00}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#F7931B"
        />

        <WalletBox 
          title="Entradas"
          amount={5000.00}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#4E41F0"
        />

        <WalletBox 
          title="Saídas"
          amount={4850.00}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#E44C4E"
        />

        <MessageBox 
          title="Muito bem!"
          description="Sua carteira está positiva!"
          footerText="Cotinue assim. Considere investir o seu saldo."
          icon={happyImg}
        />
      </Content>
    </Container>
  );
}

export default Dashboard;