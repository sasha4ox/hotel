import React from 'react';
import { Facebook } from './Facebook';
import { GoogleMap } from './Map/GoogleMap';

function Contatcs() {
  return (
    <>
      <main className={'wrapper__contacts'}>
        <h1 className={'contacts__name'}>Контакты</h1>
        <div className={'contacts__block'}>
          <h3 className={'contacts__bock_name'}>Номера телефонов</h3>
          <a href="tel:068-17-098-27">068-17-098-27</a>
          <a href="tel:093-674-47-94">093-674-47-94</a>
          <h3 className={'contacts__bock_name'}>Адрес</h3>
          <a href=" https://goo.gl/maps/wvhRMpcVaxkYdruz8">Винница, ул Киевская 7</a>
          <Facebook />
        </div>
      </main>
      <GoogleMap center={{ lat: 49.238162, lng: 28.478699 }} zoom={14} />
    </>
  );
}

export default Contatcs;
