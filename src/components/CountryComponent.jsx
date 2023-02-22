import axios from "axios";
import { useEffect, useState } from "react";
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
    return (country.name && <CountryComp data={country}/>)
}