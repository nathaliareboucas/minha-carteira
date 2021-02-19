import React, {useState, useMemo} from 'react';

import {Container, Content} from  './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';

const Dashboard: React.FC = () => {

  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);          
        } catch {
          throw new Error('invalid amount.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);          
        } catch {
          throw new Error('invalid amount.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês você gastou mais do que deveria.',
        footerText: 'Verifique suas depesas e tente cortar gastos desnecessários.',
        icon: sadImg
      }
    } else if (totalBalance === 0) {
      return {
        title: 'Ufaa!',
        description: 'Neste mês você gastou extamente o que ganhou.',
        footerText: 'Tenha cuidado! No próximo mês tente poupar o seu dinheiro.',
        icon: grinningImg
      } 
    } else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva. ',
        footerText: 'Continue assim. Considere investir o seu saldo.',
        icon: happyImg
      }
    }
  }, [totalBalance]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentGains = total === 0 ? 0 : (totalGains / total) * 100;
    const percentExpenses = total === 0 ? 0 : (totalExpenses / total) * 100;
    
    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: Number(percentGains.toFixed(1)),
        color: '#4E41F0'
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        color: '#E44C4E'
      }
    ];

    return data;
    
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfMonths.map((_, month) => {
      let amountEntry = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount);            
          } catch {
            throw new Error('amountEntry is invalid.');
          }
        }
      });

      let amountOutput = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount);            
          } catch {
            throw new Error('amountOutput is invalid.');
          }
        }
      });

      return {
        monthNumber: month,
        month: listOfMonths[month].substr(0, 3),
        amountEntry,
        amountOutput
      }
    }).filter(item => {
      const currentDate = new Date();
      const currentMounth = currentDate.getMonth();
      const CurrentYear = currentDate.getFullYear();
      return (yearSelected === CurrentYear && item.monthNumber <= currentMounth) ||
        (yearSelected < CurrentYear);
    });
  }, [yearSelected]);

  const relativeExpensesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0
    let amountEventual = 0;

    expenses.filter(expense => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth() +1;

      return month === monthSelected && year === yearSelected;
    }).forEach(expense => {
      if (expense.frequency === 'recorrente') {
        return amountRecurrent += Number(expense.amount);
      }

      if (expense.frequency === 'eventual') {
        return amountEventual += Number(expense.amount);
      }
    });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: total === 0 ? 0 : Number(((amountRecurrent/total) * 100).toFixed(1)),
        color: '#4E41F0'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: total === 0 ? 0 : Number(((amountEventual/total) * 100).toFixed(1)),
        color: '#E44C4E'
      }
  ];

  }, [monthSelected, yearSelected]);

  const relativeGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0
    let amountEventual = 0;

    gains.filter(gain => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() +1;

      return month === monthSelected && year === yearSelected;
    }).forEach(gain => {
      if (gain.frequency === 'recorrente') {
        return amountRecurrent += Number(gain.amount);
      }

      if (gain.frequency === 'eventual') {
        return amountEventual += Number(gain.amount);
      }
    });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: total === 0 ? 0 : Number(((amountRecurrent/total) * 100).toFixed(1)),
        color: '#4E41F0'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: total === 0 ? 0 : Number(((amountEventual/total) * 100).toFixed(1)),
        color: '#E44C4E'
      }
  ];

  }, [monthSelected, yearSelected]);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error('invalid month value.');
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
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
          amount={totalBalance}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#F7931B"
        />

        <WalletBox 
          title="Entradas"
          amount={totalGains}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#4E41F0"
        />

        <WalletBox 
          title="Saídas"
          amount={totalExpenses}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#E44C4E"
        />

        <MessageBox 
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

        <PieChartBox data={relationExpensesVersusGains}/>

        <HistoryBox
          data={historyData} 
          lineColorAmountEntry="#4E41F0"
          lineColorAmountOutput="#E44C4E"
        />

        <BarChartBox 
          data={relativeGainsRecurrentVersusEventual}
          title="Entradas"
        />

        <BarChartBox 
          data={relativeExpensesRecurrentVersusEventual}
          title="Saídas"
        />
      </Content>
    </Container>
  );
}

export default Dashboard;