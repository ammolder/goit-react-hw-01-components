import PropTypes from 'prop-types';
import { ListItem, Circle, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <ListItem className="item" key={friend.id}>
          <Circle className="status" isOnline={friend.isOnline}></Circle>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <Name className="name">{friend.name}</Name>
        </ListItem>
      ))}
    </>
  );
};
FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
