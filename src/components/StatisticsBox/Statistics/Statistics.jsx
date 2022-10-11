import PropTypes from 'prop-types';
import { TitlePage } from '../TitlePage/TitlePage';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <TitlePage title={title} />
      <StatisticsCard stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
