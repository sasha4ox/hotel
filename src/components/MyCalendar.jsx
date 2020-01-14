import React, { useState } from 'react';

import Calendar from 'react-calendar';

export default function MyCalendar({ onChangeDay }) {
  const [date, setDate] = useState(new Date());
  const onChangeCalendar = date => {
    setDate(date);
    onChangeDay(date.getDate(), date.getMonth(), date.getFullYear());
  };
  return <Calendar onChange={onChangeCalendar} value={date} locale="ru-RU" />;
}
