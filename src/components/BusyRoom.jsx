import React from 'react';

export const BusyRoom = ({ busyRoom, onClick, isOpen }) => {
  return (
    <div className="wrapper__room__busyRoom" onClick={onClick}>
      <h3 className="room__busyRoom__h2">
        {isOpen ? null : `Узнать когда номер занят`}
      </h3>
      {busyRoom.map((item, i) => (
        <div className="room__busyRoom" key={i}>
          <h3>
            Номер занят с {item.date} по {item.dateTo} число
          </h3>
        </div>
      ))}
    </div>
  );
};
