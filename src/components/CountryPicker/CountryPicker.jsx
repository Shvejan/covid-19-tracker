import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setFetchCountries(await countries());
    };
    fetchApi();
  }, [setFetchCountries]);

  const btnclk = (con) => {
    handleCountryChange(con);
  };
  return (
    <React.Fragment>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Country...</option>
          {fetchCountries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <div className="row">
        <button className={styles.btnn} onClick={() => handleCountryChange("")}>
          Global
        </button>
        <button
          className={styles.btnn}
          onClick={() => handleCountryChange("India")}
        >
          India
        </button>
        <button
          className={styles.btnn}
          onClick={() => handleCountryChange("US")}
        >
          USA
        </button>
      </div>
    </React.Fragment>
  );
};
export default CountryPicker;
//{<button onClick={btnclk("India")}>India</button>}
