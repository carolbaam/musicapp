import ActionTypes from './actionTypes';
import database from '../firebase/firebase';

export function watchGuestAddedEvent(dispatch) {
  database.ref('/guests').on('child_added', (snap) => {
    dispatch(getGuestAddedAction(snap.val()));
  });
}

function getGuestAddedAction(guest) {
  return {
    type: ActionTypes.GuestAdded,
    guest
  };
}