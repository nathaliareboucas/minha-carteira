import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px; 
`;

export const ChartContainer = styled.div`
  height: 250px;
`;

export const Header = styled.header`
  width:100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
  }

  @media(max-width: 1280px) {
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  display:flex;
  padding-right: 16px;
  list-style: none;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  margin-left: 7px;


  > div {
    background-color: ${props => props.color};
    width: 50px;
    height: 40px;
    border-radius: 5px;

    font-size:18px;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 5px;
  }

  @media(max-width: 1280px) {
    > div {
      width: 30px;
      height: 30px;
      margin-left: 15px;
    }
  }
`;