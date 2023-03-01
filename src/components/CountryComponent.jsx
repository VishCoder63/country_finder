import axios from "axios";
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom"
import { CountryComp } from "./CountryComp";


export const CountryComponent=()=>{
    const [country,setCountry]=useState({})
    const params=useParams();
    useEffect( ()=>{
        const fetchCountry=async ()=>{
            const countries = await axios.get(`https://restcountries.com/v3.1/name/${params.cntryname}?fullText=true`);
            setCountry(countries?.data[0])

        }
        fetchCountry()

    },[params.cntryname])
    return (
        <React.Fragment>
            {console.log(country)}
            <Helmet>
                <title>{country.name ? country.name.common:""}</title>
                <meta name="description" content={country.name ? country.name.common:"country_details"} />
                <meta name='icon' content={country.name ?country.flag:""}/>
                <meta property='og:image' content={country.name ?country.flag:""}/>
            </Helmet>

        {country.name && <CountryComp data={country}/>}
        </React.Fragment>)
}