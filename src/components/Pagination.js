import React from 'react';

export const Pagination = ({ postPerPage, totalPost, paginate, currentPage }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={'pagination_nav'}>
      <ul className={`pagination_ul`}>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              className={currentPage === number ? 'activePaginationBtn' : 'paginationBtn'}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
