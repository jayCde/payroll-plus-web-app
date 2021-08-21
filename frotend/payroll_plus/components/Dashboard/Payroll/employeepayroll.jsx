import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import {GiCash} from 'react-icons/gi';
import {AiFillPlusCircle, AiOutlineEdit, AiFillDelete, AiFillMoneyCollect, AiTwotoneEdit} from 'react-icons/ai';
import styles from '../../../styles/Dashboard/payroll.module.css';



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

const EmployeePayroll = () => {
    //State objects for form inputs 
    //Adding an empoyee salary
    const [employeeID, setEmployeeID] = React.useState("")
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [comphourlyRate, setcomphourlyRate] = React.useState("");
    const [daysClocked, setdaysClocked] = React.useState(0)
    const [salary, setSalary] = React.useState(0);

    //Editing an employee
    const [editcomphourlyRate, seteditcomphourlyRate] = React.useState("");
    const [editdaysClocked, seteditdaysClocked] = React.useState(0)
    const [editsalary, seteditSalary] = React.useState(0);

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

    
    function Modals(){
        return(
            <>
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
                                <div><AiFillMoneyCollect  style={{float: "left", fontSize: "24px"}}/> <h4 style={{float: "right"}}>Add Salary payment</h4></div>
                                <form id="add-emp-sal-form">
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Employee ID"
                                        id="emp-id"
                                        value={employeeID}
                                        onChange={(e) => setEmployeeID(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
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
                                        placeholder="Company hourly rate GHc"
                                        id="comp-rate"
                                        value={comphourlyRate}
                                        onChange={(e) => setcomphourlyRate(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Days clocked In GHc"
                                        id="work-days"
                                        value={daysClocked}
                                        onChange={(e) => setdaysClocked(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Salary to be Paid"
                                        id="emp-salary"
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <button
                                        className={styles.submitbtn}
                                    >
                                        Calculate Monthly Salary
                                    </button>
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
                                <div><AiTwotoneEdit  style={{float: "left", fontSize: "24px"}}/> <h4 style={{float: "right"}}>Update Salary Payment Details</h4></div>
                                <form id="edit-emp-pay-form">
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Edit Company hourly rate for selected user"
                                        id="comp-rate"
                                        value={editcomphourlyRate}
                                        onChange={(e) => seteditcomphourlyRate(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Days clocked in"
                                        id="clocked-days"
                                        value={editdaysClocked}
                                        onChange={(e) => seteditdaysClocked(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Salary amount"
                                        id="emp-salary"
                                        value={editsalary}
                                        onChange={(e) => seteditSalary(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <button
                                        className={styles.submitbtn}
                                    >
                                        Calculate Monthly Salary
                                    </button>
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
        </>
        )
    }

    return (
        <div>
            <Modals/>
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
                                <th>Company Rate GHc</th>
                                <th>Days Clocked</th>
                                <th>Salary</th>

                                <th><button onClick={handleOpen} className={styles.buttonGroups} style={{color:"white"}}><AiFillPlusCircle/></button></th>
							</tr>
						<tr>
							<td>39949</td>
                            <td>Employee</td>
							<td>Employee</td>
                            <td>10.0</td>
							<td>24</td>
                            <td>1920.00</td>
                            <td>
                                <button onClick={handleEditOpen} className={styles.buttonGroups}><AiOutlineEdit/></button>
                                <button className={styles.buttonGroups}><AiFillDelete/></button>
                            </td>
						</tr>
						<tr>
							<td>39949</td>
                            <td>Employee</td>
							<td>Employee</td>
                            <td>10.0</td>
							<td>24</td>
                            <td>1920.00</td>
                            <td>
                                <button onClick={handleEditOpen} className={styles.buttonGroups}><AiOutlineEdit/></button>
                                <button className={styles.buttonGroups}><AiFillDelete/></button>
                            </td>
						</tr>
					</table>
					

                    </div>
                    
                </main>
            </div>
        </div>
    )
}

export default EmployeePayroll
