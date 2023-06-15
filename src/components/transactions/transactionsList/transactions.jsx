import { TransactionsItem } from '../transactionsItem/transactionsItem';
import { Transaction, TransactionHead } from './transaction.styled';

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
        <TransactionsItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </Transaction>
  );
};
