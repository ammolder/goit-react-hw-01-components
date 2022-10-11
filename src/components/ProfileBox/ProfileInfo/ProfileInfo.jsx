import PropTypes from 'prop-types';
import { Wrapper, Photo, Name, Info } from './ProfileInfo.styled';

export const ProfileInfo = ({ username, tag, location, avatar }) => {
  return (
    <Wrapper className="description">
      <Photo src={avatar} alt="User avatar" className="avatar" />
      <Name className="name">{username}</Name>
      <Info className="tag">{tag}</Info>
      <Info className="location">{location}</Info>
    </Wrapper>
  );
};
ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
