import PropTypes from 'prop-types';

export const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionsItem.protoType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
};
