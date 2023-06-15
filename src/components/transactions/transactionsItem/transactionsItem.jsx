import PropTypes from 'prop-types';
import { Transactions, Transaction } from './transaction.styled';

export const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <Transactions>
      <tr>
        <Transaction>{type}</Transaction>
        <Transaction>{amount}</Transaction>
        <Transaction>{currency}</Transaction>
      </tr>
    </Transactions>
  );
};

TransactionsItem.protoType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
};
