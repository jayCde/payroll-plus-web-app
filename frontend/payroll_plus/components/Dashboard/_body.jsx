import React from 'react';
import styles from '../../styles/Dashboard/body.module.css';
import {FaApplePay, FaUserCircle, FaAlipay, FaAmazonPay, FaCcPaypal} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import {GiCash} from 'react-icons/gi'
import {MdPayment} from 'react-icons/md'

const Body = () => {
    
    const Pending_Payments = "GH₵ 24 039.40";
    const Number_of_Employees = 54;

    const Total_Payments = "GH₵ 24 039.40";
    const Miscellaneous = "Employee workshop upcoming on Tuesday 20th July";
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h4 className={styles.title}>
                 Dashboard Summary
                </h4>

                <div className={styles.grid}>
                    <div  className={styles.card}>
                        <h3>Total Payments pending... <MdPayment/></h3>
                        <p>{Pending_Payments}</p>
                    </div>

                    <div  className={styles.card}>
                        <h3>Total Number of Employees... </h3>
                        <p>{Number_of_Employees}</p>
                    </div>

                    <div  className={styles.card}>
                        <h3>Total Payments Done... <MdPayment/></h3>
                        <p>{Total_Payments}</p>
                    </div>

                    <div  className={styles.card}>
                        <h3>Miscellaneous Expenditures... </h3>
                        <p>{Miscellaneous}</p>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default Body
