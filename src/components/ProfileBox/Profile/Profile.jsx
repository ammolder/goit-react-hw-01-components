import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { ProfileSoc } from '../ProfileSoc/ProfileSoc';
import { Wrapper } from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Wrapper className="profile">
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileSoc stats={stats} />
    </Wrapper>
  );
};
