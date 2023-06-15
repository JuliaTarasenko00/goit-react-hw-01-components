import PropTypes from 'prop-types';
import { StatisticsItem, Statistic } from './statisticsItem.styled';

export const Statistics = ({ label, percentage }) => {
  return (
    <StatisticsItem percentage={percentage}>
      <Statistic>{label}</Statistic>
      <span>{percentage}%</span>
    </StatisticsItem>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
