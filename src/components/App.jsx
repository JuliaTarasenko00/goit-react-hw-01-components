import user from 'data/user';
import { Profile } from './profile/profile';

import data from 'data/data';
import { StatisticsList } from './statistics/statisticsList';

import friends from 'data/friends';
import { FriendList } from './friends/friendList/friendList';

import transactions from 'data/transactions';
import { Transactions } from './transactions/transactions';

import { Container } from './App.styled'

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsList title="Upload stats" items={data} />
      <FriendList lists={friends} />
      <Transactions lists={transactions} />
    </Container>
  );
};
