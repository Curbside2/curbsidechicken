import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB50tVrx1F5PObNv1SjgQILb9vpMBNUeQo',
  authDomain: 'curbsidechicken-fe07f.firebaseapp.com',
  databaseURL: 'curbsidechicken-fe07f.firebaseio.com',
  projectId: 'curbsidechicken-fe07f',
  storageBucket: 'curbsidechicken-fe07f.appspot.com',
  messagingSenderId: '83629973534',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
	db,
	auth,
};

// sensitive information for firebase authentication api