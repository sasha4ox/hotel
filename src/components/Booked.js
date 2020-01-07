import React from 'react';
import firebase from '../firebase';
export const Booked = props => {
  const arryIncludeId = props.flats
    .map(room => {
      const roomBooked = room.payload.filter(item => item.id === props.id);
      if (roomBooked.length) {
        const payloadById = room.payload.filter(item => item.id === props.id);
        room.payload = [...payloadById];
        return room;
      } else {
        return null;
      }
    })
    .filter(item => item);
  // const dateBooked
  // const includeDate =
  const deleteOrder = (id, date) => {
    const ref = firebase
      .firestore()
      .collection('flats')
      .doc(id);
    console.log(date);
    const deletedDate = arryIncludeId.map(item => {
      console.log(item.payload);
      return item.payload.filter(i => i.date !== date);
    });
    // Set the "capital" field of the city 'DC'
    console.log(deletedDate);
    ref
      .update({
        payload: deletedDate[0],
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };
  console.log(arryIncludeId);
  return (
    <div>
      <h1>Список Ваших забронированных номеров!</h1>
      {arryIncludeId.map((room, i) => (
        <>
          <img src={room.img} alt="dsfsd" />
          <ul key={i}>
            {room.payload.map(item => (
              <li key={Math.random()}>
                {item.date}{' '}
                <button onClick={() => deleteOrder(room.id, item.date)}>Отменить</button>
              </li>
            ))}
          </ul>
        </>
      ))}

      {/* <h1>{props.flats}</h1> */}
      <h3>{props.id}</h3>
    </div>
  );
};
