import React from 'react';
import { NavLink } from 'react-router-dom';
export const BookedEmpty = () => {
  return (
    <div className="wrapper_bookedEmpty">
      <h1>У вас ещё нет Забронированных номеров</h1>
      <NavLink to="/rooms">Перейти к номерам</NavLink>
    </div>
  );
};
