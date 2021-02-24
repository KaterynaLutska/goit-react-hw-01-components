import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './Friedns.module.css';

const FriendList = ({ props }) => {
  return (
    <ul className={s.friendList}>
      <FriendListItem friends={props} />
    </ul>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
