import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Pagination } from './Pagination';

// import getRooms from './getRooms';
// import { AuthContext } from '../Auth';

function Rooms(props) {
  // const flats = props.flats;

  const [flats, setFlats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setFlats(props.flats);
  }, [props.flats]);
  const searcedArray = flats.filter(room => {
    return room.tags.toLowerCase().includes(search.toLowerCase());
  });
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentFlats = searcedArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  const handleFind = e => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // console.log(searcedArray);
  // console.log(flats);
  return (
    <>
      <div className={'wrapper__forSearch'}>
        <form action="">
          <label htmlFor="searchRoom">Поиск номера</label>
          <input type="text" onChange={handleFind} id={'searchRoom'} value={search} />
        </form>
      </div>

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
      <Pagination
        postPerPage={postPerPage}
        totalPost={searcedArray.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}
export default Rooms;
