import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import getRooms from './getRooms';
import { AuthContext } from '../Auth';

function Rooms() {
  let match = useRouteMatch();
  // console.log(match);
  // console.log(match.path);
  // console.log(match.url);
  const flats = getRooms();
  console.log(useContext(AuthContext));
  return (
    <>
      {flats.map(flat => (
        <div key={flat.id} className="wrapper__room" data-id={flat.id}>
          <img src={flat.img} alt="flat.rooms" className="room__img" />
          <div className="room__description">
            <div className="room_descr_r">
              {' '}
              <p>{flat.sauna.toString()}</p>
              <p>{flat.price}</p>
            </div>
            <div className="room_descr_l">
              <p>{flat.rooms}</p>
              <p>{flat.luxury.toString()}</p>
            </div>
          </div>
          <Link to={`rooms/${flat.id}`}>Заказать</Link>
        </div>
      ))}
      <h1>Лучшие номера</h1>

      {/* <Route path={`${match.path}`}>
        <ExactRoom />
      </Route> */}
    </>
  );
}
export default Rooms;
