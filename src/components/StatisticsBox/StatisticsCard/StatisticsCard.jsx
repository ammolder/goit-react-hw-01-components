import PropTypes from 'prop-types';
import { CardList, Item, Data } from './StatisticsCard.style';

export const StatisticsCard = ({ stats }) => {
  return (
    <CardList className="stat-list">
      {stats.map(stat => (
        <Item className="item" key={stat.id}>
          <Data className="label">{stat.label}</Data>
          <Data className="percentage">{stat.percentage}</Data>
        </Item>
      ))}
    </CardList>
  );
};
StatisticsCard.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
