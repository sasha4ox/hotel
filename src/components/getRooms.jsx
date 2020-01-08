import { useEffect, useState } from 'react';

import firebase from '../firebase';

function GetRooms() {
  const [flats, setFlats] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('flats')
      .onSnapshot(snapshot => {
        const newRooms = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFlats(newRooms);
      });
  }, []);
  console.log(flats);
  return flats;
}
export default GetRooms;
