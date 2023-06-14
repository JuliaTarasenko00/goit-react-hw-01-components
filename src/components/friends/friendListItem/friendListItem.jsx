import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, name }) => {
  return (
      <li>
        <img src={avatar} alt={name} width="100px"/>
        <p>{name}</p>
      </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
