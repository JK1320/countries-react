import React from 'react';

const CountryInfoOnClick = (props) => {
  return (
    <div>
      <img src={props.data.flag} alt="country flag" />
      <h3>{props.data.name}</h3>
      <p>Native Name: {props.data.nativeName}</p>
      <p>Population: {props.data.population}</p>
      <p>Region: {props.data.region}</p>
      <p>Sub Region: {props.data.subregion}</p>
      {props.data.capital && <p>Capital: {props.data.capital}</p>}
      <p>Top Level Domain: {props.data.topLevelDomain}</p>
    </div>
  );
};

export default CountryInfoOnClick;
