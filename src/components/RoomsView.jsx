import React from 'react';
import { NavLink } from 'react-router-dom';
export const RoomsView = ({ currentFlats }) => {
  return (
    <div>
      {currentFlats.map(flat => (
        <div key={flat.id} className="wrapper__room" data-id={flat.id}>
          <img src={flat.img} alt="flat.rooms" className="room__img" />
          <div className="room__description">
            <div className="room_descr_r">
              <p>{flat.sauna ? `Сауна в номере` : `Номер без сауны`}</p>
              <p>{`Цена за сутки: ${flat.price} $`}</p>
            </div>
            <div className="room_descr_l">
              <p>{`Комнат в номере: ${flat.rooms}`}</p>
              <p>{flat.luxury ? `Номер класса Люкс` : `Комфортабельный номер`}</p>
            </div>
          </div>
          <NavLink to={`rooms/${flat.id}`} className={'orderRoom'}>
            Заказать
          </NavLink>
        </div>
      ))}
    </div>
  );
};
