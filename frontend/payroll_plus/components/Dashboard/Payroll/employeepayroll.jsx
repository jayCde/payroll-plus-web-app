import React from 'react';
import {GiCash} from 'react-icons/gi';
import {AiFillPlusCircle, AiOutlineEdit, AiFillDelete} from 'react-icons/ai';
import styles from '../../../styles/Dashboard/payroll.module.css';


const EmployeePayroll = () => {
    return (
        <div>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h5 className={styles.title}>
                        Employee payroll...{''}<GiCash/>
                    </h5>

                    <div className={styles.payrollListing}>
                        <table className={styles.payrollData} id="payroll-data">
							<tr>
								<th>Employee ID</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Department</th>
                                <th>Unit</th>
                                <th>Hourly Rate</th>
                                <th>Salary</th>

                                <th><button className={styles.buttonGroups} style={{color:"white"}}><AiFillPlusCircle/></button></th>
							</tr>
						<tr>
							<td>39949</td>
                            <td>Employee</td>
							<td>Employee</td>
                            <td>Department 1</td>
							<td>Unit 1</td>
                            <td>Hourly rate 1</td>
                            <td>GHC 239.00</td>
                            <td>
                                <button className={styles.buttonGroups}><AiOutlineEdit/></button>
                                <button className={styles.buttonGroups}><AiFillDelete/></button>
                            </td>
						</tr>
						<tr>
							<td>39949</td>
                            <td>Employee</td>
							<td>Employee</td>
                            <td>Department 1</td>
							<td>Unit 1</td>
                            <td>Hourly rate 1</td>
						</tr>
                        <tr>
							<td>39949</td>
                            <td>Employee</td>
							<td>Employee</td>
                            <td>Department 1</td>
							<td>Unit 1</td>
                            <td>Hourly rate 1</td>
						</tr>
                        <tr>
							<td>39949</td>
                            <td>Employee</td>
							<td>Employee</td>
                            <td>Department 1</td>
							<td>Unit 1</td>
                            <td>Hourly rate 1</td>
						</tr>
					</table>
					

                    </div>
                    
                </main>
            </div>
        </div>
    )
}

export default EmployeePayroll
