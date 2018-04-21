import ActionTypes from './actionTypes';
import database from '../firebase/firebase';

export function addToInvite(name) {
  return dispatch => {
    dispatch(addToInviteRequestedAction());
    const playlist = database.ref('/playlist');
    playlist.push({
      name
    })
    .then(() => {
      dispatch(addToInviteFulfilledAction({ name }));
    })
    .catch((error) => {
      dispatch(addToInviteRejectedAction());
    });
  }
}


function addToInviteRequestedAction() {
  return {
    type: ActionTypes.AddToInviteRequested
  };
}

function addToInviteRejectedAction() {
  return {
    type: ActionTypes.AddToInviteRejected
  }
}

function addToInviteFulfilledAction(guest) {
  return {
    type: ActionTypes.AddToInviteFulfilled,
    guest
  };
}