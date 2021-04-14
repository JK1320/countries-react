import {useState, useEffect} from "react";
import "./App.css";
import countriesAll from "./countriesAll";
import CountryInfo from "./CountryInfo";
import CountryInfoOnClick from "./CountryInfoOnClick";
import SelectRegion from "./SelectRegion";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useState(countriesAll);
  const [selectValue, setSelectValue] = useState("");
  const [clickedCountry, setClickedCountry] = useState();

  useEffect(() => {
    if (inputValue === "" && selectValue === "") {
      setCountries(countriesAll);
    } else if (inputValue !== "" && selectValue === "") {
      const filteredCountries = countriesAll.filter(
        (item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.capital.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCountries(filteredCountries);
    } else if (inputValue === "" && selectValue !== "") {
      const filteredCountries = countriesAll.filter((item) =>
        item.region.toLowerCase().includes(selectValue.toLowerCase())
      );
      setCountries(filteredCountries);
    } else {
      const filteredCountries = countriesAll.filter(
        (item) =>
          item.region.toLowerCase().includes(selectValue.toLowerCase()) &&
          (item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            item.capital.toLowerCase().includes(inputValue.toLowerCase()))
      );
      setCountries(filteredCountries);
    }
  }, [inputValue, selectValue]);

  return (
    <div className="App">
      <h1>Challenge Countries</h1>
      {clickedCountry ? (
        <button onClick={() => setClickedCountry()}>Back</button>
      ) : (
        <>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="input-value"
            placeholder="search..."
          />
          <SelectRegion
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          />
        </>
      )}

      <div className="container">
        {clickedCountry ? (
          <CountryInfoOnClick data={clickedCountry} />
        ) : (
          countries.map((country, index) => {
            return (
              <CountryInfo
                onClick={() => setClickedCountry(country)}
                key={index}
                data={country}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
