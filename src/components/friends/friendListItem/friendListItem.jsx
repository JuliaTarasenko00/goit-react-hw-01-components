import PropTypes from 'prop-types';
import {
  FriendItems,
  FriendIsOnline,
  FriendText,
  Friend,
} from './friendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItems>
      <FriendIsOnline isOnline={isOnline}></FriendIsOnline>
      <Friend src={avatar} alt={name} width="50px" />
      <FriendText>{name}</FriendText>
    </FriendItems>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
