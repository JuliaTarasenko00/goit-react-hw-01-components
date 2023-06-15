import PropTypes from 'prop-types';
import { Transactions } from './transaction.styled'

export const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <Transactions>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </Transactions>
  );
};

TransactionsItem.protoType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
};
