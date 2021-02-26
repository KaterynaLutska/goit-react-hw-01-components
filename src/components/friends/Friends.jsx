import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem.jsx/FriendItem';
import s from './Friedns.module.css';

const FriendList = ({ props }) => {
  return (
    <ul className={s.friendList}>
      <FriendsItem friends={props} />
    </ul>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
