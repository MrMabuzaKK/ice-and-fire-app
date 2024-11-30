// components/Pagination.js

import React from 'react';
import '../styles/components/Pagination.css';

const Pagination = ({ currentPage, totalItems, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={page === currentPage ? 'active' : ''}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
