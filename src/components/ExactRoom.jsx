import React, { useState, useEffect, useContext } from 'react';
import MyCalendar from './MyCalendar';
import booking from './booking';
import { AuthContext } from '../Auth';
function ExactRoom(props) {
  const { currentUser } = useContext(AuthContext);
  const [rooms, setRooms] = useState(false);
  const room = props.flats.find(room => {
    if (room.id === props.match.params.id) {
      return room;
    }
  });
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [fullDate, setFullDate] = useState(`1990-04-02`);
  const [book, setBook] = useState('');
  let dateStr;
  const onChangeDay = (days, months, years) => {
    let dayTrue;
    if (days < 9) {
      dayTrue = `0${days}`;
      setDay(dayTrue);
    } else {
      dayTrue = days;
      setDay(days);
    }
    let monthTrue;
    if (months < 9) {
      monthTrue = `0${months + 1}`;
      setMonth(monthTrue);
    } else {
      setMonth(months + 1);
      monthTrue = months + 1;
    }
    // let years = years;
    setYear(years);

    dateStr = `${years}-${monthTrue}-${dayTrue}`;
    setFullDate(dateStr);
    console.log(dateStr);
    if (room) {
      const yes = room.payload.filter(item => item.date === dateStr);
      console.log(yes);
    }
  };

  useEffect(() => {
    room ? setRooms(true) : setRooms(false);
  }, [room]);
  const onChangeDayForInput = e => {
    setFullDate(e.target.value);
  };
  const submitDate = e => {
    e.preventDefault();
    const text = booking(1, fullDate, currentUser.uid, room);
    console.log(text);
    setBook(text ? text : `<h1>Вы забронировали номер ${fullDate}</h1>`);
  };

  console.log(book);
  return (
    <>
      {book}
      <h1>Выберите число, когда вы хотите поселиться</h1>
      <MyCalendar onChangeDay={onChangeDay} />
      {day && (
        <p>
          {day} {month} {year}
        </p>
      )}
      <form action="" onSubmit={submitDate}>
        <input type="text" value={fullDate} onChange={onChangeDayForInput} />
        <button>Забронировать</button>
      </form>
      {rooms && (
        <div key={room.id} className="wrapper__room" data-id={rooms.id}>
          <img src={room.img} alt="flat.rooms" className="room__img" />
          <div className="room__description">
            <div className="room_descr_r">
              {' '}
              <p>{room.sauna.toString()}</p>
              <p>{room.price}</p>
            </div>
            <div className="room_descr_l">
              <p>{room.rooms}</p>
              <p>{room.luxury.toString()}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ExactRoom;
