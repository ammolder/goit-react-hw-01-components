import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Wrapper } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Wrapper className="friend-list">
      <FriendListItem friends={friends} />
    </Wrapper>
  );
};
