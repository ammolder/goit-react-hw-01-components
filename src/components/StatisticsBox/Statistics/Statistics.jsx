import PropTypes from 'prop-types';
import { TitlePage } from '../TitlePage/TitlePage';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard';
import { Wrapper } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper className="statistics">
      <TitlePage title={title} />
      <StatisticsCard stats={stats} />
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
