import React from 'react';
// import { AuthContext } from '../Auth';
import { Route, Redirect } from 'react-router-dom';
import firebase from '../firebase';

function booking(id, fullday, context, room) {
  console.log(context);
  const includeDate = room.payload.filter(item => item.date === fullday);
  console.log(includeDate);
  if (includeDate.length) {
    return (
      <>
        <div>
          <h1>Извините, номер занят. Выберите другой день</h1>
        </div>
      </>
    );
  } else {
    var docRef = firebase
      .firestore()
      .collection('flats')
      .doc(room.id);
    const newObj = {
      date: `${fullday}`,
      id: `${context}`,
    };
    docRef.update({
      payload: firebase.firestore.FieldValue.arrayUnion(newObj),
    });

    return <Redirect to={`/rooms/`} />;
  }
}
export default booking;
