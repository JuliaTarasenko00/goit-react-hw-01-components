import PropTypes from 'prop-types';
import { Transaction, TransactionHead, TransactionsTb, TransactionTd } from './transaction.styled';

export const Transactions = ({ lists }) => {
  return (
    <Transaction>
      <TransactionHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHead>
      {lists.map(({ type, id, amount, currency }) => (
        <TransactionsTb key={id}>
        <tr>
          <TransactionTd>{type}</TransactionTd>
          <TransactionTd>{amount}</TransactionTd>
          <TransactionTd>{currency}</TransactionTd>
        </tr>
      </TransactionsTb>
      ))}
    </Transaction>
  );
};


Transactions.protoType = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
