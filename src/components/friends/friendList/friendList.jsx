import { FriendItem } from '../friendListItem/friendListItem';

export const FriendList = ({ lists }) => {
  return (
    <ul>
      {lists.map(({ id, avatar, name }) => (
        <FriendItem key={id} avatar={avatar} name={name} />
      ))}
    </ul>
  );
};
