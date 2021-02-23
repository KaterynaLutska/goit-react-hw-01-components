import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ props }) => {
  return (
    <ul class="friend-list">
      <FriendListItem friends={props} />
    </ul>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
