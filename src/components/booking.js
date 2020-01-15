import React from 'react';
// import { AuthContext } from '../Auth';
import { Route, Redirect } from 'react-router-dom';
import firebase from '../firebase';

function booking(id, fullday, fullDateOut, context, room, dateIn, dateOut) {
  function compareDate(dateOne, datetwo) {
    const dateArOne = dateOne.split(',');
    const dateArTwo = datetwo.split(',');
    const date1 = new Date(dateArOne[0], dateArOne[1], dateArOne[2]);
    const date2 = new Date(dateArTwo[0], dateArTwo[1], dateArTwo[2]);
    return date1 > date2;
  }
  // const dateInArray = dateIn.split(',');
  // const dateOutArray = dateOut.split(',');
  // const inDate = new Date(dateInArray[0], dateInArray[1], dateInArray[2]);
  // const outDate = new Date(dateOutArray[0], dateOutArray[1], dateOutArray[2]);
  // console.log(outDate > inDate);
  const incAr = room.payload.filter(
    item =>
      (compareDate(dateIn, item.dateIn) && compareDate(item.dateOut, dateIn)) ||
      dateIn === item.dateIn ||
      dateIn === item.dateOut ||
      (compareDate(item.dateOut, dateOut) && compareDate(dateOut, item.dateIn)) ||
      (item.dateOut === dateOut && compareDate(dateOut, item.dateIn)) ||
      (compareDate(item.dateIn, dateIn) && compareDate(dateOut, item.dateOut)) ||
      (compareDate(item.dateIn, dateIn) && compareDate(item.dateOut, dateOut))
  );
  console.log(incAr);
  const includeDate = room.payload.filter(item => item.date === fullday);
  if (incAr.length) {
    return (
      <>
        <h1 className="ExactRoom__choiceDateTag">Извините, номер занят. Выберите другой день</h1>
      </>
    );
  } else {
    var docRef = firebase
      .firestore()
      .collection('flats')
      .doc(room.id);
    const newObj = {
      date: `${fullday}`,
      dateTo: `${fullDateOut}`,
      dateIn,
      dateOut,
      id: `${context}`,
    };
    docRef.update({
      payload: firebase.firestore.FieldValue.arrayUnion(newObj),
    });

    return <Redirect to={`/booked`} />;
  }
}
export default booking;
