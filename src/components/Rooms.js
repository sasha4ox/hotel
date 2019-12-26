import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

function useFlats() {
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
  return flats;
}

function Rooms() {
  const flats = useFlats();

  return (
    <>
      {flats.map(flat => (
        <div key={flat.id}>
          <p>{flat.kitchen.toString()}</p>
          <p>{flat.rooms}</p>
        </div>
      ))}
      <h1>Лучшие номера</h1>
    </>
  );
}
export default Rooms;
