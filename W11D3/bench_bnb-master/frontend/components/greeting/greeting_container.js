// import React from "react" //don't need react here!
import { connect } from 'react-redux'
import Greeting from './greeting'
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  if (currentUserId !== null)
    return {currentUser: state.entities.users[currentUserId]};
  else
    return {currentUser: null}
};


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout) //CALLBACK
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)