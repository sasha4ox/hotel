import React, { useState } from 'react';
// import firebase from './firebase';
import Header from './components/Header';

// firebase
//   .firestore()
//   .collection('flats')
//   .add({
//     rooms: 4,
//     kitchen: true,
//   });
function App() {
  // const [me, setMe] = useState(firebase.auth().currentUser);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
