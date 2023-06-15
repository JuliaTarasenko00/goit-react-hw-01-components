import styled from 'styled-components';;

export const Transactions = styled.tbody`
  text-align: center;
  height: 30px;
  background-color: #dddddd99;
  :nth-of-type(2n) {
    background-color: #88888870;
  }
  :hover {
    color: blue;
  }
`;
export const Transaction = styled.td`
  border: 2px solid white;
`;
