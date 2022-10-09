import { ProfileInfo } from './ProfileInfo';
import { ProfileSoc } from './ProfileSoc';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className="profile">
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileSoc stats={stats} />
    </div>
  );
};
