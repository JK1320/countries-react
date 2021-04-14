import React from 'react';

const CountryInfo = (props) => {
    return (
      <div className="box">
        <img src={props.data.flag} alt="country flag" />
        <h3>{props.data.name}</h3>
        <p>Population: {props.data.population}</p>
        <p>Region: {props.data.region}</p>
        {props.data.capital && <p>Capital: {props.data.capital}</p>}
      </div>
    );
}

export default CountryInfo;
