import { Button, Select, SliderThumb } from "@mui/material";
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
    getCountries(country);
  };
  const sortCountry = (data) => {
    if (+countryData[0].population > +countryData[1].population) {
      const d = countryData?.sort((a, b) => +a.population - +b.population);
      setCountryData(d);
    } else {
      const d = countryData?.sort((a, b) => +b.population - +a.population);
      setCountryData(d);
    }
  };
  const uniqueRegions = () => {
    const uniqueRegions = {};
    countryData?.map((el) => (uniqueRegions[el.region] = 1));
    return Object.keys(uniqueRegions);
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
      <div className={styles.actions}>
        <Button variant="contained" onClick={() => sortCountry()}>
          Sort
        </Button>
        <select
          defaultValue={"Select Region to sort"}
          onChange={(el) => {
            if (el.target.value == "all") getCountries(country);
            else
              setCountryData(
                countryData.filter((c) => c.region === el.target.value)
              );
          }}
        >
          <option
            value="all"
            defaultValue="all"
            onClick={() => getCountries("")}
          >
            all
          </option>
          {uniqueRegions()?.map((el) => (
            <option
              onClick={console.log(countryData.filter((c) => c.region === el))}
            >
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.dataBoard}>
        {countryData?.map((el) => (
          <CountryComp data={el} />
        ))}
      </div>
    </div>
  );
};
