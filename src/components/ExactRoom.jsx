import React, { useState, useEffect, useContext } from 'react';
import MyCalendar from './MyCalendar';
import booking from '../functions/booking';
import { AuthContext } from '../Auth';
import { Modals } from './Modals';
import { BusyRoom } from './BusyRoom';
import { SelectedRoom } from './SelectedRoom';
import formatDateTo from '../functions/formatDateTo';

function ExactRoom(props) {
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [rooms, setRooms] = useState(false);
  const [room] = useState(
    props.flats.find(function(room) {
      if (room.id === props.match.params.id) {
        return room;
      }
    })
  );
  const [isOpenBusyRoom, setIsOpenBusyRoom] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [fullDate, setFullDate] = useState('');
  const [fullDateOut, setFullDateOut] = useState('');
  const [book, setBook] = useState('');
  const onChangeDay = (days, months, years, name) => {
    const dateStr = formatDateTo(years, months, days);
    switch (name) {
      case 'dateIn':
        setFullDate(dateStr);
        setDateIn(`${years}-${months}-${days}`);
        break;
      case 'dateOut':
        setFullDateOut(dateStr);
        setDateOut(`${years}-${months}-${days}`);
        break;
      default:
    }
  };
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
      default:
    }
  };
  const submitDate = e => {
    e.preventDefault();
    const text = booking(fullDate, fullDateOut, currentUser.uid, room, dateIn, dateOut);
    setBook(
      text ? text : `<h1 class={'ExactRoom__bookedTag'}>Вы забронировали номер ${fullDate}</h1>`
    );
  };
  const openBusyRoom = e => {
    setIsOpenBusyRoom(!isOpenBusyRoom);
    e.currentTarget.classList.toggle('wrapper__room__busyRoomActive');
    const room__busyRoom = document.querySelectorAll('.room__busyRoom');
    [...room__busyRoom].forEach(item => item.classList.toggle('room__busyRoomActive'));
  };
  return (
    <>
      {rooms && <SelectedRoom room={room} />}
      <Modals
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        text={book}
        className={'Modal'}
        classNameForBtnClose={'modalClose__btn'}
      />
      {room.payload.length > 0 ? (
        <BusyRoom busyRoom={room.payload} onClick={openBusyRoom} isOpen={isOpenBusyRoom} />
      ) : null}
      <form action="" onSubmit={submitDate} className="formCalendar">
        <div className="wrapper__calendars">
          <div className={'wrapper_forInputDate'}>
            <p className="formCalendar__name">Выберите дату приезда</p>
            <MyCalendar onChangeDay={onChangeDay} name={'dateIn'} />
            <input
              type="text"
              value={fullDate}
              onChange={onChangeDayForInput}
              className={'booking_inputDate'}
              name="dateIn"
              hidden
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
              hidden
            />
          </div>
        </div>

        <button className={'booking_btn'} onClick={handleOpenModal}>
          Забронировать
        </button>
      </form>
    </>
  );
}
export default ExactRoom;
