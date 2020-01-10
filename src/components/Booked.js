import React from 'react';
import firebase from '../firebase';
export const Booked = props => {
  const { flats } = props;
  const arryIncludeId = flats.map(room => {
    const roomBooked = room.payload.filter(item => item.id === props.id);
    if (roomBooked.length) {
      const payloadById = room.payload.filter(item => item.id === props.id);
      room.payload = [...payloadById];
      return room;
    } else {
      return null;
    }
  });
  // const includeRoom = arryIncludeId.filter(item => item.length);
  // console.log(arryIncludeId);
  // const includedId = includeRoom.map(item => item.payload);
  const arrayInc = arryIncludeId.filter(item => item);

  const deleteOrder = (id, date) => {
    console.log(id);
    console.log(date);
    const ref = firebase
      .firestore()
      .collection('flats')
      .doc(id);
    const exactRoom = props.flats.filter(room => {
      return room.id === id;
    });
    // .filter(item => item);
    console.log(exactRoom);
    // console.log(exactRoom.payload);
    console.log();

    const withoutDeletedArray = exactRoom[0].payload.filter(item => {
      if (item.date === date) {
        if (item.id === props.id) {
          return false;
        }
      }
      return true;
    });
    console.log(withoutDeletedArray);
    ref
      .update({
        payload: withoutDeletedArray,
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };

  return (
    <div>
      <h1>Список Ваших забронированных номеров!</h1>
      {arrayInc.map((room, i) => (
        <div key={i}>
          <img src={room.img} alt="dsfsd" />
          <ul>
            {room.payload.map(item => (
              <li key={Math.random()}>
                {item.date}{' '}
                <button onClick={() => deleteOrder(room.id, item.date)}>Отменить</button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* <h1>{props.flats}</h1> */}
      <h3>{props.id}</h3>
    </div>
  );
};
