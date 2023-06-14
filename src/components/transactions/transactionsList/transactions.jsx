import { TransactionsItem } from '../transactionsItem/transactionsItem';

export const Transactions = ({ lists }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {lists.map(({ type, id, amount, currency }) => (
        <TransactionsItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </table>
  );
};
