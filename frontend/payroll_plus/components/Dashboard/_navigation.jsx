import React from 'react'
import styles from '../../styles/Dashboard/navigation.module.css'
import {RiDashboardLine} from 'react-icons/ri'
import {MdPayment, MdCopyright} from 'react-icons/md'
import {GiCash} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineClose, AiFillPlusCircle} from 'react-icons/ai'


const Navigation = () => {

    //Get todays's date
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    
    //Get local time
    var currentTime = new Date();
    var time = currentTime.getHours() + ":" + currentTime.getMinutes();

    return (
        <div>
            <div className={styles.sideNavigation}>

                {/* <span className={styles.hideNavigation}><AiOutlineClose/></span> */}


                <div className={styles.notif}>
                    <li className={styles.navlistfooterItem}><a href="/">Payroll Plus<span><AiFillPlusCircle/></span></a></li>
                    <p>{date} {''}{time}</p>
                    <h4>User</h4>
                </div>

                <ul className={styles.navList}>
                    <button className={styles.navlistItem}><span><RiDashboardLine/></span><a>Dashboard</a></button>
                    <button className={styles.navlistItem}><span><MdPayment/></span><a>Payroll</a></button>
                    <button className={styles.navlistItem}><span><GiCash/></span><a>Payments</a></button>
                    <button className={styles.navlistItem}><span><FaUserCircle/></span><a>Users</a></button>
                    <button className={styles.navlistItem}><span><FiSettings/></span><a>Others</a></button>
                </ul>

                <ul className={styles.navlistFooter}>
                    <li className={styles.navlistfooterItem}><span><MdCopyright/></span><a>2021</a></li>
                    <li className={styles.navlistfooterItem}><span><GiCash/></span><a href="/">Payroll Plus<span><AiFillPlusCircle/></span></a></li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navigation
