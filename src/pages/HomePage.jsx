import { Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { CountryComp } from "../components/CountryComp";
import styles from "./homepage.module.css";

export const HomePage = () => {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    getCountries("");
  }, []);
  const getCountries = async (data) => {
    if (data === "") data = "all";
    else data = `name/${data}`;
    const countries = await axios.get(`https://restcountries.com/v3.1/${data}`);
    console.log(countries.data);
    setCountryData(countries.data);
  };
  const searchCountry = (data) => {
    // alert(country);
    getCountries(country);
  };
  return (
    <div className={styles.mainClass}>
      <form className={styles.searchForm}>
        <input
          type="text"
          placeholder="Enter country to be searched"
          onChange={(e) => setCountry(e.target.value)}
          style={{ width: "85%", height: "90%" }}
        />
        <Button variant="contained" onClick={() => searchCountry(country)}>
          Submit
        </Button>
      </form>
      <div className={styles.dataBoard}>
        {countryData?.map((el) => (
          <CountryComp data={el} />
        ))}
      </div>
    </div>
  );
};
