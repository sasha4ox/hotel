import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import main from '../img/Main.jpg';
import main2 from '../img/main2.jpg';
import main3 from '../img/main3.jpg';
import FoxDeli from '../img/FoxDeli.JPG';

function Home() {
  return (
    <>
      <main>
        <div className={'wrapper__slider'}>
          <Slider auto={5000}>
            <div className={'home__img__wrapper'}>
              {/* <h2>Мы открыты, для Вас</h2> */}
              <img className={'home__img'} src={main} alt="main" />
            </div>
            <div className={'home__img__wrapper'}>
              <h2>Мы работаем, Вы отдыхаете</h2>
              <img className={'home__img'} src={main2} alt="main" />
            </div>
            <div className={'home__img__wrapper'}>
              <h2>Мы создаём уют, для Вас</h2>
              <img className={'home__img'} src={main3} alt="main" />
            </div>
            <div className={'home__img__wrapper'}>
              <h2>Мы готовим, для Вас</h2>
              <img className={'home__img'} src={FoxDeli} alt="main" />
            </div>
          </Slider>
        </div>
      </main>
      <section className="home__about">
        <h1>Гостиница FoX Hotel</h1>
        <p>
          Пятизвездочная гостиница "FoX Hotel" находится в центральной живописной части города
          Винница. Через дорогу от нашей гостиницы расположенный зеленый и чистый сквер имени
          всемирно известного ученого, а так-же великолепный фонтан. Изысканный интерьер,
          комфортабельные номера, панорамный лифт, повышенный уровень безопасности вашего пребывания
          и безупречное обслуживанье сделает ваш отдых действительно незабываемый.
        </p>
        <p>
          Инновационная интерпретация традиционной японской кухни, в основе которой — высокое
          качество. Меню включает свежайшую рыбу, поставляемую ежедневно, а также изысканные суши и
          сашими с индивидуально подобранными напитками.
        </p>
        <p>
          Оставайтесь на связи или просто отдыхайте. Среди необходимой техники, доступной во всех
          номерах, — 40-дюймовые ЖК-телевизоры с плоским экраном, DVD-плееры, многофункциональные
          рабочие станции и принтеры, предоставляемые по запросу
        </p>
      </section>
    </>
  );
}
export default Home;
