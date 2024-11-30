import React from 'react';

const BookListItem = ({ book, onClick }) => (
  <li onClick={() => onClick(book)} style={{ cursor: 'pointer' }}>
    <strong>{book.name}</strong>
    <p>ISBN: {book.isbn}</p>
    <p>Released: {new Date(book.released).toLocaleDateString()}</p>
  </li>
);

export default BookListItem;
