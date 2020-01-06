import React, { useState, useEffect } from 'react';
import getRooms from './getRooms';
import MyCalendar from './MyCalendar';
function ExactRoom(match) {
  const [rooms, setRooms] = useState(false);
  const room = getRooms().find(room => {
    if (room.id === match.match.params.id) {
      return room;
    }
  });
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const onChangeDay = (days, months, years) => {
    if (days < 9) {
      const dayTrue = `0${days}`;
      setDay(dayTrue);
    } else {
      setDay(days);
    }
    if (months < 9) {
      const monthTrue = `0${months + 1}`;
      setMonth(monthTrue);
      console.log(monthTrue);
    } else {
      setMonth(months + 1);
    }
    setYear(years);
    const dateStr = `${year}-${month}-${day}`;
    console.log(dateStr);
    if (room) {
      const yes = room.payload.filter(item => item.date === dateStr);
      console.log(yes);
    }
  };

  useEffect(() => {
    room ? setRooms(true) : setRooms(false);
  });

  return (
    <>
      <h1>Выберите число, когда вы хотите поселиться</h1>
      <MyCalendar onChangeDay={onChangeDay} />
      {day && (
        <p>
          {day} {month} {year}
        </p>
      )}

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
