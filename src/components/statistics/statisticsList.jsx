import PropTypes from 'prop-types';
import {
  Statistic,
  StatisticsTitle,
  StatisticsLists,
  StatisticsItem,
  Statistics,
} from './statisticsList.styled';

export const StatisticsList = ({ items, title }) => {
  return (
    <Statistic>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsLists>
        {items.map(({ label, percentage, id }) => (
          <StatisticsItem key={id} percentage={percentage}>
            <Statistics>{label}</Statistics>
            <span>{percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsLists>
    </Statistic>
  );
};

StatisticsList.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
