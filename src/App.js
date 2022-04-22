import React, { useEffect, useState } from 'react';
// Components
import Card from '../src/components/Cards/Card'
import Chart from '../src/components/Charts/Chart'
import CountryPicker from '../src/components/CountryPicker/CountryPicker'
// API
import { fetchData } from '../src/services/apiCall'

const App = () => {
    const [fetchedData,setFetchedData] = useState(false)

    useEffect(()=>{
        const dataGetter = async() => {
            const data = await fetchData()
            console.log(data)
            setFetchedData(data)
        }
        dataGetter()

    },[])
    return (
        <div className="app">
            <Card fetchedData={fetchedData}/>
            <CountryPicker/>
            <Chart/>         
        </div>
    );
}
 
export default App;