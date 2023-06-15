import PropTypes from 'prop-types';
import { StatisticsItem } from './statisticsItem.styled'

export const Statistics = ({ label, percentage }) => {
  return (
    <StatisticsItem percentage ={percentage}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatisticsItem>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
