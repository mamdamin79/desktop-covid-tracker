import React,{ useEffect, useState } from 'react';
// API
import { fetchDailyData } from "../../services/apiCall"
// styles
import styles from "./Chart.module.css";
// charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// styles

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const dailyDataGetter = async()=>{
            const data = await fetchDailyData()
            console.log(data)
            setDailyData(data)
        }
        dailyDataGetter()
    },[])
    const lineChart = (
        dailyData.length > 0
        ? (
            <Line
                data={{
                    labels: dailyData.map(object => object.reportDate),
                    datasets: [{
                        data:dailyData.map(object => object.confirmed.total),
                        label:"Infected",
                        borderColor:"#3333ff",
                        fill:true,
                    },{
                        data:dailyData.map(object => object.deaths.total),
                        label:"Deaths",
                        borderColor:"red",
                        fill:true,
                    }] 
                }}
            />
        ): null
    )
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
}
 
export default Chart;