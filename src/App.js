import './App.css';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friend/friends.json';
import FriendList from './components/friend/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/ transactions.json';
import s from './App.css';
import Container from './components/Container/Container';
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
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList props={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

export default App;
