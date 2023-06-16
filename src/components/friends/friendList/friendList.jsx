import PropTypes from 'prop-types';
import { FriendItem } from '../friendListItem/friendListItem';
import { Friend } from './friendList.styled';

export const FriendList = ({ lists }) => {
  return (
    <Friend>
      {lists.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </Friend>
  );
};

FriendList.protoType = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
