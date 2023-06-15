import { Statistics } from '../statisticsItem/statisticsItem';
import {
  Statistic,
  StatisticsTitle,
  StatisticsLists,
} from './statisticsList.styled';

export const StatisticsList = ({ items, title }) => {
  return (
    <Statistic>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsLists>
        {items.map(({ label, percentage, id }) => (
          <Statistics key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsLists>
    </Statistic>
  );
};
