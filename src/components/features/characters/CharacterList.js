import React, { useState } from 'react';
import SearchBar from '../../common/SearchBar';
import Modal from '../../common/Modal';
import CharacterListItem from './CharacterListItem';
import CharacterDetails from './CharacterDetails';
import { getPaginatedItems, getTotalPages } from '../../../utils/pagination.utils';
import '../../../styles/components/CharacterList.css';

const CharacterList = ({ characters }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const getCharacterDisplayName = (character) => {
    return character.name || 
           (character.titles && character.titles[0]) || 
           (character.aliases && character.aliases[0]) || 
           'Unnamed Character';
  };

  const filteredCharacters = searchQuery
    ? characters.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : characters;

  const currentCharacters = getPaginatedItems(filteredCharacters, currentPage);
  const totalPages = getTotalPages(filteredCharacters);

  return (
    <div className="character-list">
      <div className="list-header">
        <h2>Characters</h2>
        <SearchBar onSearch={handleSearch} />
      </div>

      <ul>
        {currentCharacters.length > 0 ? (
          currentCharacters.map((character, index) => (
            <CharacterListItem
              key={index}
              character={character}
              onClick={handleCharacterClick}
              getDisplayName={getCharacterDisplayName}
            />
          ))
        ) : (
          <li>No characters found.</li>
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

      <Modal isOpen={selectedCharacter !== null} onClose={() => setSelectedCharacter(null)}>
        {selectedCharacter && (
          <CharacterDetails
            character={selectedCharacter}
            getDisplayName={getCharacterDisplayName}
          />
        )}
      </Modal>
    </div>
  );
};

export default CharacterList;
