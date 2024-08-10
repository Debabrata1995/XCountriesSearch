import React from 'react';

function CountryCard({ country }) {
  return (
    <div className="countryCard">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <p>{country.name.common}</p>
    </div>
  );
}

export default CountryCard;
