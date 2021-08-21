import React, {useState, useEffect} from 'react';
// import AddEmployees from '../DataForms/_employeeAdd';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import {FaUserPlus, FaUserEdit} from 'react-icons/fa';
import {AiFillPlusCircle, AiOutlineEdit, AiFillDelete} from 'react-icons/ai'
import styles from '../../../styles/Dashboard/employees.module.css';

//Modal Styles
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const EmployeeDetails = () => {
    //State objects for form inputs 
    //Adding an empoyee
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("")
    const [department, setDepartment] = React.useState("");
    const [unit, setUnit] = React.useState("");
    const [rate, setRate] = React.useState("");
    const [baseSalary, setbaseSalary] = React.useState("");

    //Editing an employee
    const [editfirstname, seteditFirstname] = React.useState("");
    const [editlastname, seteditLastname] = React.useState("")
    const [editdepartment, seteditDepartment] = React.useState("");
    const [editunit, seteditUnit] = React.useState("");
    const [editrate, sseteditRate] = React.useState("");
    const [editbaseSalary, seteditbaseSalary] = React.useState("");

    //State  objects for modals
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleEditOpen = () => {
        setOpenEdit(true);
    };

    const handleEditClose = () => {
        setOpenEdit(false);
    };

    return (
        <div>
            <div>
                {/*Modal form to add employees*/}
                <div className={styles.addEmployeeform}>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        <div className={classes.paper}>
                            <div>
                                <div><FaUserPlus  style={{float: "left", fontSize: "24px"}}/> <h4 style={{float: "right"}}>Add an Employee</h4></div>
                                <form id="add-emp-form" className={styles.addEmpbtn}>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Employee firstname"
                                        id="emp-name"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Employee lastname"
                                        id="emp-age"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Employee Department"
                                        id="emp-department"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Unit"
                                        id="emp-unit"
                                        value={unit}
                                        onChange={(e) => setUnit(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Hourly Rate"
                                        id="emp-rate"
                                        value={rate}
                                        onChange={(e) => setRate(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Base Salary"
                                        id="emp-sal"
                                        value={baseSalary}
                                        onChange={(e) => setbaseSalary(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <button
                                        className={styles.submitbtn}
                                    >
                                    Submit
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                        </Fade>
                    </Modal>
                </div>
            </div>

            <div>
                {/*Modal form to edit employees*/}
                <div className={styles.editEmployeeform}>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openEdit}
                        onClose={handleEditClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={openEdit}>
                        <div className={classes.paper}>
                            <div>
                                <div><FaUserEdit  style={{float: "left", fontSize: "24px"}}/> <h4 style={{float: "right"}}>Update Employee Details</h4></div>
                                <form id="add-emp-form" className={styles.addEmpbtn}>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Update Selected Employee's firstname"
                                        id="emp-name"
                                        value={editfirstname}
                                        onChange={(e) => seteditFirstname(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Update Selected Employee's lastname"
                                        id="emp-age"
                                        value={editlastname}
                                        onChange={(e) => seteditLastname(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Update Selected Employee's Department"
                                        id="emp-department"
                                        value={department}
                                        onChange={(e) => seteditDepartment(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Unit"
                                        id="emp-unit"
                                        value={editunit}
                                        onChange={(e) => seteditUnit(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Update Selected Employee's Hourly Rate"
                                        id="emp-rate"
                                        value={editrate}
                                        onChange={(e) => seteditRate(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Update Selected Employee's Base Salary"
                                        id="emp-sal"
                                        value={editbaseSalary}
                                        onChange={(e) => seteditbaseSalary(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <button
                                        className={styles.submitbtn}
                                    >
                                    Submit
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                        </Fade>
                    </Modal>
                </div>
            </div>

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
                                        onClick={handleOpen}
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
                                <button onClick={handleEditOpen} className={styles.buttonGroups}><AiOutlineEdit/></button>
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
