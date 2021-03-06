import React from 'react';
import del1 from '../img/FoxDeli.JPG';
import del2 from '../img/Hashi.JPG';
import del3 from '../img/Hashi2.JPG';
import del4 from '../img/Ristorante.JPG';
export const Services = () => {
  return (
    <main className="services">
      <h1 className="services__h1">Услуги</h1>
      <p>
        Хотите отправиться в кругосветное путешествие по кухням мира? Вам предложат превосходные
        блюда из самых разных стран: от Италии до Японии, от богатой кулинарными традициями Индии до
        Европы и средиземноморского побережья.
      </p>
      <img src={del1} alt="FoxDeli" />
      <p>
        Инновационная интерпретация традиционной японской кухни, в основе которой — высокое
        качество. Меню включает свежайшую рыбу, поставляемую ежедневно, а также изысканные суши и
        сашими с индивидуально подобранными напитками.
      </p>
      <img src={del2} alt="Hashi" />
      <p>
        Идеальное место для незабываемого элегантного ужина на открытой террасе под звуки
        современных композиций в исполнении собственного диджея отеля.
      </p>
      <img src={del3} alt="Hashi2" />
      <p>
        Аутентичная кухня с учетом итальянских традиций, лучшие европейские ингредиенты и
        потрясающее расположение в Downtown Vinnitsa. Вам понравятся и простые закуски, и
        великолепный пятничный бранч в нашем заведении для гурманов, вдохновением для которого
        послужила сама Италия.
      </p>
      <img src={del4} alt="Ristorante" />
      <p>
        Соблазнительная выпечка, свежий хлеб, домашняя паста, аппетитные сыры и колбасные изделия
        отражают разнообразие меню.
      </p>
    </main>
  );
};
