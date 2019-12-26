import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: 'AIzaSyCPUJEaiVrlHBHz7yjKKlISurod4rCfA00',
  authDomain: 'hotel-a7493.firebaseapp.com',
  databaseURL: 'https://hotel-a7493.firebaseio.com',
  projectId: 'hotel-a7493',
  storageBucket: 'hotel-a7493.appspot.com',
  messagingSenderId: '448569752504',
  appId: '1:448569752504:web:fe91453a35b1cdc2ebad4d',
  measurementId: 'G-DJH3STSSK8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
