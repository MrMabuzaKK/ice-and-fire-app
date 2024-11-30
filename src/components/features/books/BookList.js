import React, { useState } from 'react';
import SearchBar from '../../common/SearchBar';
import Modal from '../../common/Modal';
import BookListItem from './BookListItem';
import BookDetails from './BookDetails';
import { getPaginatedItems, getTotalPages } from '../../../utils/pagination.utils';
import '../../../styles/components/BookList.css';

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const filteredBooks = searchQuery
    ? books.filter((book) =>
        book.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : books;

  const currentBooks = getPaginatedItems(filteredBooks, currentPage);
  const totalPages = getTotalPages(filteredBooks);

  return (
    <div className="book-list">
      <div className="list-header">
        <h2>Books</h2>
        <SearchBar onSearch={handleSearch} />
      </div>

      <ul>
        {currentBooks.length > 0 ? (
          currentBooks.map((book, index) => (
            <BookListItem 
              key={index}
              book={book}
              onClick={handleBookClick}
            />
          ))
        ) : (
          <li>No books found.</li>
        )}
      </ul>

      {totalPages > 1 && (
        <div className="pagination">
          {[1, 2].map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </button>
          ))}
        </div>
      )}

      <Modal isOpen={selectedBook !== null} onClose={() => setSelectedBook(null)}>
        {selectedBook && <BookDetails book={selectedBook} />}
      </Modal>
    </div>
  );
};

export default BookList;
