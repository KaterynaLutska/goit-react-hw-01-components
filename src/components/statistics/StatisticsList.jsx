import PropTypes from 'prop-types';

const StatisticsList = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li class="item" key={id}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsList;
