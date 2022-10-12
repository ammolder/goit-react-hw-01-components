import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import { Profile } from './ProfileBox/Profile/Profile';
import { Statistics } from './StatisticsBox/Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
};
