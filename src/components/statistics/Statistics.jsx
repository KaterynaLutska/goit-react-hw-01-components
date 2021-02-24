import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import s from './Statistics.module.css';

const Statistics = ({ title, children, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}> {title}</h2>}
      {children}
      <StatisticsList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
