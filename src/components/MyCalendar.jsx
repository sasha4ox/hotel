import React, { useState } from 'react';

import Calendar from 'react-calendar';

export default function MyCalendar({ onChangeDay }) {
  const [date, setDate] = useState(new Date());
  const onChangeCalendar = date => {
    setDate(date);
    // const array = date.toString().split(' ');
    // console.log(array[3], array[2]);
    // console.log(date.getDate());
    // console.log(date.getMonth());
    // console.log(date.getFullYear());
    onChangeDay(date.getDate(), date.getMonth(), date.getFullYear());
  };
  return <Calendar onChange={onChangeCalendar} value={date} locale="ru-RU" />;
}
