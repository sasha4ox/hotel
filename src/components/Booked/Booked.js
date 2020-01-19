import React, { useEffect } from 'react';
import firebase from '../../firebase';
import { BookedEmpty } from './bookedEmpty';
export const Booked = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { flats } = props;
  const inclededArray = new Set([]);
  flats.forEach(room => {
    room.payload.forEach(item => {
      if (item.id === props.id) {
        inclededArray.add(room);
      }
    });
  });
  const deleteOrder = (id, date) => {
    const ref = firebase
      .firestore()
      .collection('flats')
      .doc(id);
    const exactRoom = props.flats.filter(room => {
      return room.id === id;
    });
    const withoutDeletedArray = exactRoom[0].payload.filter(item => {
      if (item.date === date) {
        if (item.id === props.id) {
          return false;
        }
      }
      return true;
    });
    ref
      .update({
        payload: withoutDeletedArray,
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error) {
        console.error('Error updating document: ', error);
      });
  };
  return (
    <main className="ExactRoom__choiceDateTag">
      {inclededArray.size === 0 ? (
        <BookedEmpty />
      ) : (
        <h1 className="ExactRoom__h1">Список Ваших забронированных номеров!</h1>
      )}

      {[...inclededArray].map((room, i) => (
        <div
          key={i}
          className={
            [...inclededArray].length === 1
              ? 'wrapper__room selected__roomOne'
              : 'wrapper__room selected__room'
          }
        >
          <img src={room.img} alt="dsfsd" className="room__img" />
          <ul className="room__ordered__descrp">
            {room.payload.map(item =>
              item.id === props.id ? (
                <li key={Math.random()} className={'room__ordered__date'}>
                  <p> {`С ${item.date} по ${item.dateTo}`} </p>
                  <p>
                    {' '}
                    Вы заказали данный номер, Если Ваши планы поменялись, свяжитесь с нашим
                    операторм или нажмите кнопку "Отменить"
                  </p>
                  <button
                    onClick={() => deleteOrder(room.id, item.date)}
                    className={'room__ordered__cancel'}
                  >
                    Отменить
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </div>
      ))}
    </main>
  );
};
