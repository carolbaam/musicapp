import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAQXwpsinfFUQCUtSXp9IbWRxgTUH8Q4KQ',
  authDomain: 'fir-try-4857b.firebaseapp.com',
  databaseURL: 'https://fir-try-4857b.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();



export default database;