import React from 'react';

const BookDetails = ({ book }) => (
  <div>
    <h3>{book.name}</h3>
    <div className="detail-row">
      <span className="detail-label">ISBN:</span> {book.isbn}
    </div>
    <div className="detail-row">
      <span className="detail-label">Author:</span> {book.authors.join(', ')}
    </div>
    <div className="detail-row">
      <span className="detail-label">Released:</span>{' '}
      {new Date(book.released).toLocaleDateString()}
    </div>
    <div className="detail-row">
      <span className="detail-label">Publisher:</span> {book.publisher}
    </div>
    <div className="detail-row">
      <span className="detail-label">Number of Pages:</span> {book.numberOfPages}
    </div>
    <div className="detail-row">
      <span className="detail-label">Country:</span> {book.country}
    </div>
    <div className="detail-row">
      <span className="detail-label">Media Type:</span> {book.mediaType}
    </div>
  </div>
);

export default BookDetails;
