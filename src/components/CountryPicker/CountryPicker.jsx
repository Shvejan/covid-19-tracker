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
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchCountries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
