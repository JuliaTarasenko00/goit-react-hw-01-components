import { Statistics } from '../statisticsItem/statisticsItem';

export const StatisticsList = ({ items, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {items.map(({ label, percentage, id }) => (
          <Statistics key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
