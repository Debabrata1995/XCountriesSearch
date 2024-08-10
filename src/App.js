import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching country data:', error));
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;
