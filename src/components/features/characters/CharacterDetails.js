import React from 'react';

const CharacterDetails = ({ character, getDisplayName }) => (
  <div>
    <h3>{getDisplayName(character)}</h3>
    {character.gender && (
      <div className="detail-row">
        <span className="detail-label">Gender:</span> {character.gender}
      </div>
    )}
    {character.culture && (
      <div className="detail-row">
        <span className="detail-label">Culture:</span> {character.culture}
      </div>
    )}
    {character.born && (
      <div className="detail-row">
        <span className="detail-label">Born:</span> {character.born}
      </div>
    )}
    {character.died && (
      <div className="detail-row">
        <span className="detail-label">Died:</span> {character.died}
      </div>
    )}
    {character.titles && character.titles.length > 0 && (
      <div className="detail-row">
        <span className="detail-label">Titles:</span>
        <ul className="detail-list">
          {character.titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    )}
    {character.aliases && character.aliases.length > 0 && (
      <div className="detail-row">
        <span className="detail-label">Aliases:</span>
        <ul className="detail-list">
          {character.aliases.map((alias, index) => (
            <li key={index}>{alias}</li>
          ))}
        </ul>
      </div>
    )}
    {character.playedBy && character.playedBy.length > 0 && (
      <div className="detail-row">
        <span className="detail-label">Played By:</span>
        <ul className="detail-list">
          {character.playedBy.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default CharacterDetails;
