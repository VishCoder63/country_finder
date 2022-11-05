import styles from "./countryComp.module.css";
export const CountryComp = ({ data }) => {
  return (
    <div className={styles.countryDiv}>
      <p>{data?.name.common}</p>
      {/* <img src={data?.flags.png} alt="" /> */}
      <p>{data?.population}</p>
      <p>{data?.region}</p>
      <p>{data?.capital}</p>
    </div>
  );
};
