import PropTypes from 'prop-types';
import {
  Statistic,
  StatisticsTitle,
  StatisticsLists,
  StatisticsItem,
  Statistics
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
  percentage: PropTypes.number.isRequired,
  label: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
