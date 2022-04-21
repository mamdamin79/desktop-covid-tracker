import React from 'react';
import CountUp from 'react-countup';
// styles
import styles from './Card.module.css';
const Card = ({fetchedData}) => {
    if(fetchedData){
        return (
            <div className={styles.container}>
                <div className={styles.cart}>
                    <p>Infected</p>
                    <h3>
                        <CountUp start="0" end={fetchedData.confirmed.value}/>
                    </h3>
                    <p>last updated</p>
                    <p>Number of active cases of COVID-19</p>
                </div>
                <div className={styles.cart}>
                    <p>Recoverd</p>
                    <h3>94890</h3>
                    <p>last updated</p>
                    <p>Number of recoveries cases from COVID-19</p>
                </div>
                <div className={styles.cart}>
                    <p>Deaths</p>
                    <h3>94890</h3>
                    <p>last updated</p>
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