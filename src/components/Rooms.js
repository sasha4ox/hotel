import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  };
  const handleFind = e => {
    setSearch(e.target.value);
  };

  console.log(searcedArray);
  console.log(flats);
  return (
    <>
      <form action="">
        <input type="text" onChange={handleFind} value={search} />
      </form>
      {currentFlats.map(flat => (
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
      <Pagination postPerPage={postPerPage} totalPost={searcedArray.length} paginate={paginate} />
      <h1>Лучшие номера</h1>

      {/* <Route path={`${match.path}`}>
        <ExactRoom />
      </Route> */}
    </>
  );
}
export default Rooms;
