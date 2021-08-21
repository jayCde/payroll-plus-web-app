import React, {useState, useEffect} from 'react';
// import Navigation from './_navigation';
import Body from './_body';
import EmployeeDetails from './Employees/employees';
import EmployeeSalary from './Salaries/salaries';
import EmployeePayroll from './Payroll/employeepayroll';

// import Footer from './_footer';
import styles from '../../styles/Dashboard/dashboard.module.css'

//Icons
import {RiDashboardLine} from 'react-icons/ri'
import {MdPayment, MdCopyright} from 'react-icons/md'
import {GiCash} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'


const UserDashboard = () => {

    //User navigation section
    //Get todays's date
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    
    //Get local time
    var currentTime = new Date();
    var time = currentTime.getHours() + ":" + currentTime.getMinutes();

    //state objects
    const [showDashbaord, setShowDashboard] = useState(true);
    const [showEmployees, setShowEmployees] = useState(false);
    const [showSalaries, setShowSalaries] = useState(false);
    const [showPayroll, setShowPayroll] = useState(false);

    //display dashboard
    const renderDashboard = () => {
        setShowDashboard(true);
        setShowEmployees(false);
        setShowSalaries(false);
        setShowPayroll(false);
      };
    
    //display employes
    const renderEmployeeDetails = () =>{
        setShowDashboard(false);
        setShowEmployees(true);
        setShowSalaries(false);
        setShowPayroll(false);
    }

    //display salary payments
    const renderEmployeeSalary = () =>{
        setShowDashboard(false);
        setShowEmployees(false);
        setShowSalaries(true);
        setShowPayroll(false);
    }

    //display payroll
    const renderEmployeePayroll = () =>{
        setShowDashboard(false);
        setShowEmployees(false);
        setShowSalaries(false);
        setShowPayroll(true);
    }
    
    return (
        <>
            <div>
                <div className={styles.sideNavigation}>

                    {/* <span className={styles.hideNavigation}><AiOutlineClose/></span> */}


                    <div className={styles.notif}>
                        <li className={styles.navlistfooterItem}><a href="/">Payroll Plus<span><AiFillPlusCircle/></span></a></li>
                        <p>{date} {''}{time}</p>
                        <h4>User</h4>
                    </div>

                    <ul className={styles.navList}>
                        <button onClick={renderDashboard} className={styles.navlistItem}><span><RiDashboardLine/></span><a>Dashboard</a></button>
                        <button onClick={renderEmployeePayroll} className={styles.navlistItem}><span><MdPayment/></span><a>Payroll</a></button>
                        <button onClick={renderEmployeeSalary} className={styles.navlistItem}><span><GiCash/></span><a>Salaries</a></button>
                        <button onClick={renderEmployeeDetails} className={styles.navlistItem}><span><FaUserCircle/></span><a>Employees</a></button>
                        <button className={styles.navlistItem}><span><FiSettings/></span><a>Others</a></button>
                    </ul>

                    <ul className={styles.navlistFooter}>
                        <li className={styles.navlistfooterItem}><span><MdCopyright/></span><a>2021</a></li>
                        <li className={styles.navlistfooterItem}><span><GiCash/></span><a href="/">Payroll Plus<span><AiFillPlusCircle/></span></a></li>
                    </ul>
                    
                </div>
            </div>
            {showDashbaord && <Body/>}
            {showPayroll && <EmployeePayroll/>}
            {showSalaries && <EmployeeSalary/>}
            {showEmployees && <EmployeeDetails/>}

        </>
    )
}

export default UserDashboard
