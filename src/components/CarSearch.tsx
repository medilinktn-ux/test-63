import React, { useState } from 'react';

function CarSearch() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // TO DO: implement search logic
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default CarSearch;