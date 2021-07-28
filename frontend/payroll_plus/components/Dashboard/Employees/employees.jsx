import React from 'react';
import {AiFillPlusCircle, AiOutlineEdit, AiFillDelete} from 'react-icons/ai'
import styles from '../../../styles/Dashboard/employees.module.css';


import AddEmployees from '../DataForms/_employeeAdd';




const EmployeeDetails = () => {
    return (
        <div>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h5 className={styles.title}>
                        EMPLOYEES...{''}
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

                                <th><button 
                                        className={styles.buttonGroups}
                                        data-toggle="modal"
                                        data-target="#add-employees"
                                    >
                                        <AiFillPlusCircle/>
                                    </button></th>
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

export default EmployeeDetails
