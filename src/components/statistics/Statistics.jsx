import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';

const Statistics = ({ title, children, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title"> {title}</h2>}
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
