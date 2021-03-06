import React from 'react';

export const SelectedRoom = ({ room }) => {
  return (
    <div key={room.id} className="wrapper__room selected__room">
      <h2 className={'room__choicedApText'}> Выбранные апартаменты</h2>
      <img src={room.img} alt="flat.rooms" className="room__img__selected" />
      <div className="room__description__selected">
        <p>
          Погрузитесь в мир райской роскоши Fox — неброской, изысканной и неповторимой. В вашем
          распоряжении кровати размера king-size, индивидуальные душевые кабинки и ванны, а также
          вся необходимая техника для полноценного наслаждения отдыхом.
          {room.sauna ? `Сауна в номере подарит Вам незабываемые ощущения.` : null}
          {room.luxury
            ? `Насладитесь невероятным удобством в номере. В вашем 
          распоряжении станция персонального дворецкого с собственными 
          баром и кофемашиной. Получайте удовольствие от отдыха, наслаждаясь 
          потрясающим видом`
            : `Комфортабельный номер`}
          {`Комнат в номере: ${room.rooms}, как раз под Ваши потребности.`}
        </p>
        <p>{`Цена за сутки: ${room.price} $`}</p>
      </div>
    </div>
  );
};
