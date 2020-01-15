import React, { useState, useEffect, useContext } from 'react';
import MyCalendar from './MyCalendar';
import booking from './booking';
import { AuthContext } from '../Auth';
function ExactRoom(props) {
  const { currentUser } = useContext(AuthContext);
  const [rooms, setRooms] = useState(false);
  const [room, setRoom] = useState(
    props.flats.find(room => {
      if (room.id === props.match.params.id) {
        return room;
      }
    })
  );

  // const [day, setDay] = useState(null);
  // const [month, setMonth] = useState(null);
  // const [year, setYear] = useState(null);
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [fullDate, setFullDate] = useState(`1990-04-02`);
  const [fullDateOut, setFullDateOut] = useState(`1990-04-02`);

  const [book, setBook] = useState('');
  let dateStr;
  const onChangeDay = (days, months, years, name) => {
    let dayTrue;
    if (days < 9) {
      dayTrue = `0${days}`;
      // setDay(dayTrue);
    } else {
      dayTrue = days;
      // setDay(days);
    }
    let monthTrue;
    if (months < 9) {
      monthTrue = `0${months + 1}`;
      // setMonth(monthTrue);
    } else {
      // setMonth(months + 1);
      monthTrue = months + 1;
    }
    // let years = years;
    // setYear(years);

    dateStr = `${years}-${monthTrue}-${dayTrue}`;
    switch (name) {
      case 'dateIn':
        setFullDate(dateStr);
        setDateIn(`${years},${months},${days}`);
        break;
      case 'dateOut':
        setFullDateOut(dateStr);
        setDateOut(`${years},${months},${days}`);

        break;
    }

    // if (room) {
    //   const yes = room.payload.filter(item => item.date === dateStr);
    // }
  };
  console.log(dateIn);
  useEffect(() => {
    window.scrollTo(0, 0);
    room ? setRooms(true) : setRooms(false);
  }, [room]);
  const onChangeDayForInput = e => {
    switch (e.target.name) {
      case 'dateIn':
        setFullDate(e.target.value);
        break;
      case 'dateOut':
        setFullDateOut(e.target.value);
        break;
    }
  };
  const submitDate = e => {
    e.preventDefault();
    const text = booking(1, fullDate, fullDateOut, currentUser.uid, room, dateIn, dateOut);
    setBook(
      text ? text : `<h1 class={'ExactRoom__bookedTag'}>Вы забронировали номер ${fullDate}</h1>`
    );
  };
  const openBusyRoom = e => {
    e.currentTarget.classList.toggle('wrapper__room__busyRoomActive');
    const room__busyRoom = document.querySelectorAll('.room__busyRoom');
    [...room__busyRoom].forEach(item => item.classList.toggle('room__busyRoomActive'));
  };
  return (
    <>
      <div className="wrapper__room__busyRoom" onClick={openBusyRoom}>
        <h3 className="room__busyRoom__h2">Даты бронирования номера</h3>
        {room.payload.map((item, i) => (
          <div className="room__busyRoom" key={i}>
            <h3>
              Номер занят с {item.date} по {item.dateTo} число
            </h3>
          </div>
        ))}
      </div>

      {rooms && (
        <div key={room.id} className="wrapper__room" data-id={rooms.id}>
          <h2 className={'room__choicedApText'}> Выбранные апартаменты</h2>
          <img src={room.img} alt="flat.rooms" className="room__img" />
          <div className="room__description">
            <div className="room_descr_r">
              <p>{room.sauna ? `Сауна в номере` : `Номер без сауны`}</p>
              <p>{`Цена за сутки: ${room.price} $`}</p>
            </div>
            <div className="room_descr_l">
              <p>{`Комнат в номере: ${room.rooms}`}</p>
              <p>{room.luxury ? `Номер класса Люкс` : `Комфортабельный номер`}</p>
            </div>
          </div>
        </div>
      )}
      {book ? (
        book
      ) : (
        <h1 className={'ExactRoom__choiceDateTag'}>Выберите число, когда вы хотите поселиться</h1>
      )}
      {/* <div className={'wrappere_forCalendar'}></div> */}

      <form action="" onSubmit={submitDate} className="formCalendar">
        <div className={'wrapper_forInputDate'}>
          <p className="formCalendar__name">Выберите дату приезда</p>
          <MyCalendar onChangeDay={onChangeDay} name={'dateIn'} />
          <input
            type="text"
            value={fullDate}
            onChange={onChangeDayForInput}
            className={'booking_inputDate'}
            name="dateIn"
          />
        </div>
        <div className={'wrapper_forInputDate'}>
          <p className="formCalendar__name">Выберите дату выезда</p>
          <MyCalendar onChangeDay={onChangeDay} name={'dateOut'} />
          <input
            type="text"
            value={fullDateOut}
            onChange={onChangeDayForInput}
            className={'booking_inputDate'}
            name="dateOut"
          />
        </div>
        <button className={'booking_btn'}>Забронировать</button>
      </form>
    </>
  );
}
export default ExactRoom;
