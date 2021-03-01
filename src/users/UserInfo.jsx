import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './users.selectors';
import Spinner from './Spinner';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />
  }
  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  userData: PropTypes.shape()
}

UserInfo.defaultValue = {
  userData: null,
}

const mapState = state => {
  return {
    isFetching: isFetchingSelector(state),
    userData: userDataSelector(state),
  };
};

export default connect(mapState)(UserInfo);