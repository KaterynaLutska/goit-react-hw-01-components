import './App.css';

import user from './components/db/user.json';
import statisticalData from './components/db/statistical-data.json';
import friends from './components/db/friends.json';
import transactions from './components/db/transactions.json';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends/Friends';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import Container from './components/container/Container';

import s from './App.css';

function App() {
  return (
    <div className={s.App}>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={statisticalData} />
        <FriendList props={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

export default App;
