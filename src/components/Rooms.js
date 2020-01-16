import React, { useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { RoomsView } from './RoomsView';

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
  const sumbmitSearch = e => {
    e.preventDefault();
  };
  // console.log(searcedArray);
  // console.log(flats);
  return (
    <>
      <div className={'wrapper__forSearch'}>
        <form action="" onSubmit={sumbmitSearch}>
          <label htmlFor="searchRoom">Поиск номера</label>
          <input type="text" onChange={handleFind} id={'searchRoom'} value={search} />
        </form>
      </div>
      {currentFlats.length > 0 ? (
        <RoomsView currentFlats={currentFlats} />
      ) : (
        <h1> Сорян, ничего не найденно</h1>
      )}
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
