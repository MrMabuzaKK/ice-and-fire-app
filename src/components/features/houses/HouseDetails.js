import React from 'react';

const HouseDetails = ({ house }) => (
  <div>
    <h3>{house.name}</h3>
    {house.region && (
      <div className="detail-row">
        <span className="detail-label">Region:</span> {house.region}
      </div>
    )}
    {house.words && (
      <div className="detail-row">
        <span className="detail-label">Words:</span> {house.words}
      </div>
    )}
    {house.coatOfArms && (
      <div className="detail-row">
        <span className="detail-label">Coat of Arms:</span> {house.coatOfArms}
      </div>
    )}
    {house.founded && (
      <div className="detail-row">
        <span className="detail-label">Founded:</span> {house.founded}
      </div>
    )}
    {house.diedOut && (
      <div className="detail-row">
        <span className="detail-label">Died Out:</span> {house.diedOut}
      </div>
    )}
    {house.titles && house.titles.length > 0 && (
      <div className="detail-row">
        <span className="detail-label">Titles:</span>
        <ul className="detail-list">
          {house.titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    )}
    {house.seats && house.seats.length > 0 && (
      <div className="detail-row">
        <span className="detail-label">Seats:</span>
        <ul className="detail-list">
          {house.seats.map((seat, index) => (
            <li key={index}>{seat}</li>
          ))}
        </ul>
      </div>
    )}
    {house.ancestralWeapons && house.ancestralWeapons.length > 0 && (
      <div className="detail-row">
        <span className="detail-label">Ancestral Weapons:</span>
        <ul className="detail-list">
          {house.ancestralWeapons.map((weapon, index) => (
            <li key={index}>{weapon}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default HouseDetails;
