import React,{ useEffect, useState } from 'react';
// API
import { fetchCountries } from '../../services/apiCall';
// react select
import Select from 'react-select'

const CountryPicker = (props) => {
    const [countries , setCountries] = useState([])
    useEffect(()=> {
        const countryGetter = async() => {
            const data = await fetchCountries();
            console.log(data.countries.map(country =>({value : country.name , label : country.name})));
            setCountries(data.countries.map(country =>({value : country.name , label : country.name})))
        }
        countryGetter()

    },[])
    
    return (
        <div>
            {countries.length > 0 && <Select onChange={(e)=> props.countryChangeHandler(e.value)} options={countries.length > 0 && countries }/>}
        </div>
    );
}
 
export default CountryPicker;