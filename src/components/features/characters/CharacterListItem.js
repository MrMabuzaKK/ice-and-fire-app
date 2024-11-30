import React from 'react';

const CharacterListItem = ({ character, onClick, getDisplayName }) => (
  <li onClick={() => onClick(character)} style={{ cursor: 'pointer' }}>
    <strong>{getDisplayName(character)}</strong>
    <p>
      {character.gender && `Gender: ${character.gender}`}
      {character.culture && ` • Culture: ${character.culture}`}
    </p>
  </li>
);

export default CharacterListItem;
