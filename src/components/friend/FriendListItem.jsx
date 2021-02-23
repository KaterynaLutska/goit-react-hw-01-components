import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li class="item" key={id}>
          <span class="status">{isOnline}</span>
          <img class="avatar" src={avatar} alt={name} width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
