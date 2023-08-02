import { Country, State } from "country-state-city";
import { useEffect, useState } from "react";
import Selector from "./components/Selector";
import "./App.css";

const App = () => {
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);


  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  return (
    <section>
      <div>
        <h2>Country, State and City Selectors</h2>
        <br />
        <div>
          <div>
            <p>Country :</p>
            <Selector
              data={countryData}
              selected={country}
              setSelected={setCountry}
            />
          </div>
          {state && (
            <div>
              <p>State :</p>
              <Selector
                data={stateData}
                selected={state}
                setSelected={setState}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
