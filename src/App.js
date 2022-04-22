import React, { useEffect, useState } from 'react';
// Components
import Card from '../src/components/Cards/Card'
import Chart from '../src/components/Charts/Chart'
import CountryPicker from '../src/components/CountryPicker/CountryPicker'
// API
import { fetchData } from '../src/services/apiCall'
import { fetchCountryData } from '../src/services/apiCall';
const App = () => {
    const [fetchedData,setFetchedData] = useState(false)
    const [selectedCountryData , setSelectedCountryData] = useState(false)

    useEffect(()=>{
        const dataGetter = async() => {
            const data = await fetchData()
            console.log(data)
            setFetchedData(data)
        }
        dataGetter()

    },[])

    const countryChangeHandler = async(country) =>{
        const countryData = await fetchCountryData(country);
        console.log(countryData);
        setSelectedCountryData(countryData);

    }

    return (
        <div className="app">
            <Card fetchedData={fetchedData} selectedCountryData={selectedCountryData}/>
            <CountryPicker countryChangeHandler={countryChangeHandler}/>
            <Chart/>         
        </div>
    );
}
 
export default App;