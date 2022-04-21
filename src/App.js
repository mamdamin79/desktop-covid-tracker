import React from 'react';
// Components
import Card from '../src/components/Cards/Card'
import Chart from '../src/components/Charts/Chart'
import CountryPicker from '../src/components/CountryPicker/CountryPicker'

const App = () => {
    return (
        <>
            <h1>app</h1>
            <Card/>
            <Chart/>
            <CountryPicker/>
            
        </>
    );
}
 
export default App;