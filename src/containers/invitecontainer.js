import { connect } from 'react-redux';
import Invite from '../components/Invite';
import { getInvite } from '../actions/getInvite';
import { addToInvite } from '../actions/addInvite';
import { watchGuestAddedEvent } from '../actions/guestAddedEvent';
import { ActionTypes } from '../actions/actionTypes';


function mapStateToProps(state) {
    return {
        invite: state.invite
      };
    }

function mapDispatchToProps(dispatch) {
    watchGuestAddedEvent(dispatch);
    return {
      onGetInvite: () => dispatch(getInvite()),
      onAddToInvite: (name) => dispatch(addToInvite(name))
    };
  } 

const InviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite);

export default InviteContainer;