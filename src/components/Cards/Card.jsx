import React from 'react';
import CountUp from 'react-countup';
// styles
import styles from './Card.module.css';
const Card = ({fetchedData ,selectedCountryData}) => {
    if(fetchedData){
        return (
            <div className={styles.container}>
                <div className={`${styles.cart} ${styles.infected}`}>
                    <p>Infected</p>
                    <h3>
                        <CountUp start="0" end={selectedCountryData ? selectedCountryData.confirmed.value : fetchedData.confirmed.value} separator="," duration={2.5}/>
                    </h3>
                    <p>{new Date(fetchedData.lastUpdate).toDateString()}</p>
                    <p>Number of active cases of COVID-19</p>
                </div>
                <div className={`${styles.cart} ${styles.recovered}`}>
                    <p>Recovered</p>
                    <h3>
                        <CountUp start="0" end={selectedCountryData ? selectedCountryData.recovered.value : fetchedData.recovered.value} separator="," duration={2.5}/>
                    </h3>
                    <p>{new Date(fetchedData.lastUpdate).toDateString()}</p>
                    <p>Number of deaths caused by COVID-19</p>
                </div>                
                <div className={`${styles.cart} ${styles.deaths}`}>
                    <p>Deaths</p>
                    <h3>
                        <CountUp start="0" end={selectedCountryData ? selectedCountryData.deaths.value : fetchedData.deaths.value} separator="," duration={2.5}/>
                    </h3>
                    <p>{new Date(fetchedData.lastUpdate).toDateString()}</p>
                    <p>Number of deaths caused by COVID-19</p>
                </div>
            </div>
        );
    }
    else{
        return <h1>loading...</h1>
    }
    
}
 
export default Card;