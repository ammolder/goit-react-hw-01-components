import PropTypes from 'prop-types';
import { Wrapper, Item, ElItem } from './ProfileSoc.styled';

export const ProfileSoc = ({ stats: { followers, views, likes } }) => {
  return (
    <Wrapper className="stats">
      <Item>
        <ElItem className="label">Followers</ElItem>
        <ElItem className="quantity">{followers}</ElItem>
      </Item>
      <Item>
        <ElItem className="label">Views</ElItem>
        <ElItem className="quantity">{views}</ElItem>
      </Item>
      <Item>
        <ElItem className="label">Likes</ElItem>
        <ElItem className="quantity">{likes}</ElItem>
      </Item>
    </Wrapper>
  );
};
ProfileSoc.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
