import PropTypes from 'prop-types';
import StatisticsItem from './statisticsItem/StatisticsItem';
import s from './Statistics.module.css';

const Statistics = ({ title, children, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}> {title}</h2>}
      {children}
      <StatisticsItem stats={stats} />
    </section>
  );
};

Statistics.defaultProps = {
  title: 'Upload stats',
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
