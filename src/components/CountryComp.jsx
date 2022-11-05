import styles from "./countryComp.module.css";
export const CountryComp = ({ data }) => {
  return (
    <div className={styles.countryDiv}>
      <img src={data?.flags.png} alt="" />
      <h2>{data?.name.common}</h2>
      <div>
        <h2>Population:</h2>
        <span>{data?.population}</span>
      </div>
      <div>
        <h2>Region:</h2>
        <span>{data?.region}</span>
      </div>
      <div>
        <h2>Capital:</h2>
        <span>{data?.capital}</span>
      </div>
    </div>
  );
};
