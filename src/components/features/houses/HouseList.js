// components/HouseList.js
import React, { useState } from 'react';
import SearchBar from '../../common/SearchBar';
import Modal from '../../common/Modal';
import HouseListItem from './HouseListItem';
import HouseDetails from './HouseDetails';
import { getPaginatedItems, getTotalPages } from '../../../utils/pagination.utils';
import '../../../styles/components/HouseList.css';

const HouseList = ({ houses }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleHouseClick = (house) => {
    setSelectedHouse(house);
  };

  const filteredHouses = searchQuery
    ? houses.filter((house) =>
        house.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : houses;

  const currentHouses = getPaginatedItems(filteredHouses, currentPage);
  const totalPages = getTotalPages(filteredHouses);

  return (
    <div className="house-list">
      <div className="list-header">
        <h2>Houses</h2>
        <SearchBar onSearch={handleSearch} />
      </div>

      <ul>
        {currentHouses.length > 0 ? (
          currentHouses.map((house, index) => (
            <HouseListItem
              key={index}
              house={house}
              onClick={handleHouseClick}
            />
          ))
        ) : (
          <li>No houses found.</li>
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

      <Modal isOpen={selectedHouse !== null} onClose={() => setSelectedHouse(null)}>
        {selectedHouse && <HouseDetails house={selectedHouse} />}
      </Modal>
    </div>
  );
};

export default HouseList;
