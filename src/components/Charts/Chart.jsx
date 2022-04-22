import React,{ useEffect, useState } from 'react';
// API
import { fetchDailyData } from "../../services/apiCall"
const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const dailyDataGetter = async()=>{
            setDailyData(await fetchDailyData())
        }
        dailyDataGetter()
    })
    return (
        <div>
            {dailyData.length > 0 ? "" : null}
        </div>
    );
}
 
export default Chart;