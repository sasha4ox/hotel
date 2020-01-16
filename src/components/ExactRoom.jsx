import React, { useState, useEffect, useContext } from 'react';
import MyCalendar from './MyCalendar';
import booking from './booking';
import { AuthContext } from '../Auth';
import Modal from 'react-modal';
import { BusyRoom } from './BusyRoom';
import { SelectedRoom } from './SelectedRoom';
Modal.setAppElement('#root');
function ExactRoom(props) {
  const dateNow = new Date();
  const dayNow = dateNow.getDate();
  const yearNow = dateNow.getFullYear();
  const monthNow = dateNow.getMonth();
  const formatedDay = formatDateTo(yearNow, monthNow, dayNow);
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [rooms, setRooms] = useState(false);
  const [room, setRoom] = useState(
    props.flats.find(room => {
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
  const [fullDate, setFullDate] = useState(formatedDay);
  const [fullDateOut, setFullDateOut] = useState(formatedDay);

  const [book, setBook] = useState('');
  // let dateStr;
  function formatDateTo(years, month, day) {
    let dayTrue;
    if (day < 9) {
      dayTrue = `0${day}`;
    } else {
      dayTrue = day;
    }
    let monthTrue;
    if (month < 9) {
      monthTrue = `0${month + 1}`;
    } else {
      monthTrue = month + 1;
    }
    const dateStr = `${years}-${monthTrue}-${dayTrue}`;
    return dateStr;
  }
  const onChangeDay = (days, months, years, name) => {
    const dateStr = formatDateTo(years, months, days);
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
    setIsOpenBusyRoom(!isOpenBusyRoom);
    e.currentTarget.classList.toggle('wrapper__room__busyRoomActive');
    const room__busyRoom = document.querySelectorAll('.room__busyRoom');
    [...room__busyRoom].forEach(item => item.classList.toggle('room__busyRoomActive'));
  };
  return (
    <>
      {rooms && <SelectedRoom room={room} />}
      <Modal
        isOpen={showModal}
        contentLabel="onRequestClose"
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {book}
        <button onClick={handleCloseModal} className="modalClose__btn">
          X
        </button>
      </Modal>
      {/* <div className={'wrappere_forCalendar'}></div> */}
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
        </div>

        <button className={'booking_btn'} onClick={handleOpenModal}>
          Забронировать
        </button>
      </form>
    </>
  );
}
export default ExactRoom;
