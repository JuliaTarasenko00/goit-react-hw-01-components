import PropTypes from 'prop-types';
import {
  ContainerProfile,
  ProfileImg,
  ProfileName,
  ProfileList,
  ProfileItem,
  ProfileText,
  ProfileSpan,
} from './profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ContainerProfile>
      <div>
        <ProfileImg src={avatar} alt={username} width="100px" />
        <ProfileName>{username}</ProfileName>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </div>
      <ProfileList>
        <ProfileItem>
          <ProfileSpan>Followers</ProfileSpan>
          <span>{followers}</span>
        </ProfileItem>
        <ProfileItem>
          <ProfileSpan>Views</ProfileSpan>
          <span>{views}</span>
        </ProfileItem>
        <ProfileItem>
          <ProfileSpan>Likes</ProfileSpan>
          <span>{likes}</span>
        </ProfileItem>
      </ProfileList>
    </ContainerProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
