import React from 'react';

const searchBox = ({ placeholder, handleChange }) => (
  <input type='search' placeholder={placeholder} onChange={handleChange} />
);

export default searchBox;
