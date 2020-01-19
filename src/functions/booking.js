import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase';

function booking(fullday, fullDateOut, context, room, dateIn, dateOut) {
  const dateNow = new Date();
  const dayNow = dateNow.getDate();
  const yearNow = dateNow.getFullYear();
  const monthNow = dateNow.getMonth();
  const dateStrNow = `${yearNow}-${monthNow}-${dayNow}`;
  function compareDate(dateOne, datetwo) {
    const dateArOne = dateOne.split('-');
    const dateArTwo = datetwo.split('-');
    const date1 = new Date(dateArOne[0], dateArOne[1], dateArOne[2]);
    const date2 = new Date(dateArTwo[0], dateArTwo[1], dateArTwo[2]);
    return date1 > date2;
  }

  const incAr = room.payload.filter(
    item =>
      (compareDate(dateIn, item.dateIn) && compareDate(item.dateOut, dateIn)) ||
      compareDate(dateStrNow, dateIn) ||
      dateIn === item.dateIn ||
      compareDate(dateIn, dateOut) ||
      dateIn === item.dateOut ||
      dateOut === item.dateIn ||
      dateOut === item.dateOut ||
      (compareDate(item.dateOut, dateOut) && compareDate(dateOut, item.dateIn)) ||
      (item.dateOut === dateOut && compareDate(dateOut, item.dateIn)) ||
      (compareDate(item.dateIn, dateIn) && compareDate(dateOut, item.dateOut))
    // (compareDate(item.dateIn, dateIn) && compareDate(item.dateOut, dateOut))
  );
  if (compareDate(dateIn, dateOut) || compareDate(dateStrNow, dateIn)) {
    return (
      <>
        <h1 className="ExactRoom__choiceDateInfo">Вы не правильно выбрали дату</h1>
      </>
    );
  } else if (incAr.length) {
    return (
      <>
        <h1 className="ExactRoom__choiceDateInfo">Извините, номер занят. Выберите другой день</h1>
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
