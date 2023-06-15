import styled from '@emotion/styled';

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  height: 50px;
  padding-top: 5px;
  :nth-of-type(1) {
    background-color: #ff0000ab;
  }

  :nth-of-type(2) {
    background-color: #0000ffa1;
  }

  :nth-of-type(3) {
    background-color: #008000ba;
  }

  :nth-of-type(4) {
    background-color: #ffa500ad;
  }

  :nth-of-type(5) {
    background-color: #800080bd;
  }
`;

export const Statistic = styled.span`
font-weight: 700;
`
