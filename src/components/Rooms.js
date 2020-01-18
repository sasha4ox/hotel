import React, { useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { RoomView } from './RoomView';

function Rooms(props) {
  const [flats, setFlats] = useState(props.flats);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  const [search, setSearch] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [isReverseArrya, setIsReverseArrya] = useState(false);
  const [isPriceUpCheked, setIsPriceUpCheked] = useState(false);
  const [isPriceDownCheked, setIsPriceDownCheked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('');

  const searchedArray = flats.filter(room => {
    return room.tags.toLowerCase().includes(search.toLowerCase());
  });
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentFlats = searchedArray.slice(indexOfFirstPost, indexOfLastPost);

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
  const sortByPrice = () => {
    const sorted = flats.sort(function(a, b) {
      return a.price - b.price;
    });
    setFlats(isPriceUpCheked ? sorted : sorted.reverse());
    setIsPriceUpCheked(!isPriceUpCheked);
    setCurrentPage(1);
  };

  return (
    <div className="wrapper__rooms">
      {/* {isLoad ? <h2>sdsadsa</h2> : <h1>111111111</h1>} */}
      <aside className={'rooms__aside'}>
        <div className="wrapper__room__aside__inner">
          <form onSubmit={sumbmitSearch} className="form__rooms">
            <label htmlFor="searchRoom">Поиск номера</label>
            <input
              type="text"
              onChange={handleFind}
              id={'searchRoom'}
              value={search}
              placeholder="люкс, сауна, кол-во комнат"
            />
          </form>
          <button onClick={sortByPrice} className="form__rooms__btn">
            По цене
          </button>
        </div>
      </aside>
      <section className="rooms__section">
        {currentFlats.length > 0 ? (
          <RoomView currentFlats={currentFlats} />
        ) : (
          <h1> Извините, ничего не найденно</h1>
        )}
        <Pagination
          postPerPage={postPerPage}
          totalPost={searchedArray.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </section>
    </div>
  );
}
export default Rooms;
