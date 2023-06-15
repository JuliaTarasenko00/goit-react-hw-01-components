import { FriendItem } from '../friendListItem/friendListItem';
import { Friend } from './friendList.styled'

export const FriendList = ({ lists }) => {
  return (
    <Friend>
      {lists.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </Friend>
  );
};
