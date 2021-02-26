import PropTypes from 'prop-types';
import s from '../Friedns.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={s.item} key={id}>
          <span className={isOnline ? s.online : s.status}></span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
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
