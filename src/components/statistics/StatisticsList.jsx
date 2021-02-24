import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomColor from './getRandomColor';

const StatisticsList = ({ stats }) => {
  return (
    <ul className={s.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={s.item}
          key={id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}</span>
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
