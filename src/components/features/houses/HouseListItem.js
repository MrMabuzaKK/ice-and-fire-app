import React from 'react';

const HouseListItem = ({ house, onClick }) => (
  <li onClick={() => onClick(house)} style={{ cursor: 'pointer' }}>
    <strong>{house.name}</strong>
    <p>
      {house.region && `Region: ${house.region}`}
      {house.words && ` • Words: ${house.words}`}
    </p>
  </li>
);

export default HouseListItem;
