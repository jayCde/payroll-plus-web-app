import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import {AiFillPlusCircle, AiOutlineEdit, AiFillDelete, AiFillMoneyCollect, AiTwotoneEdit} from 'react-icons/ai';
import styles from '../../../styles/Dashboard/salaries.module.css';


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

const EmployeeSalary = () => {

    //State objects for form inputs 
    //Adding an empoyee salary
    const [employeeID, setEmployeeID] = useState("")
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("")
    const [amount, setAmount] = React.useState("");
    const [amountPaid, setAmountpaid] = React.useState("");
    const [dueDate, setDuedate] = React.useState("");
    const [datePaid, setdatePaid] = React.useState("");

    //Editing an employee
    const [editamount, seteditAmount] = React.useState("");
    const [editamountPaid, seteditAmountpaid] = React.useState("");
    const [editdueDate, seteditDuedate] = React.useState("");
    const [editdatePaid, seteditdatePaid] = React.useState("");

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
                                        placeholder="Amount to be Paid"
                                        id="emp-amount"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Amount Paid"
                                        id="emp-amtPaid"
                                        value={amountPaid}
                                        onChange={(e) => setAmountpaid(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <label>Date Due</label>
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        type="date"
                                        id="emp-dateDue"
                                        value={dueDate}
                                        onChange={(e) => setDuedate(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <label>Date Paid</label>
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        type="date"
                                        id="emp-datePaid"
                                        value={datePaid}
                                        onChange={(e) => setdatePaid(e.target.value)}
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
                                <div><AiTwotoneEdit  style={{float: "left", fontSize: "24px"}}/> <h4 style={{float: "right"}}>Update Employee Payment Details</h4></div>
                                <form id="edit-emp-sal-form">
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Update amount to be paid"
                                        id="emp-amount"
                                        value={editamount}
                                        onChange={(e) => seteditAmount(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        placeholder="Update amount paid"
                                        id="emp-amtPaid"
                                        value={editamountPaid}
                                        onChange={(e) => seteditAmountpaid(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <label>Date Due</label>
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        type="date"
                                        id="emp-dateDue"
                                        value={editdueDate}
                                        onChange={(e) => seteditDuedate(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <label>Date Paid</label>
                                    <div>
                                    <input
                                        className={styles.InputField}
                                        type="date"
                                        id="emp-datePaid"
                                        value={editdatePaid}
                                        onChange={(e) => seteditdatePaid(e.target.value)}
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
        </>
        )
    }
    return (
        <div>
            <Modals/>
           <div className={styles.container}>
                <main className={styles.main}>
                    <h5 className={styles.title}>
                        SALARY PAYMENTS{''}
                    </h5>

                    <div className={styles.payrollListing}>
                        <table className={styles.payrollData} id="payroll-data">
							<tr>
								<th>Employee ID</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Amount to be paid GHC</th>
                                <th>Amount Paid</th>
                                <th>Due Date</th>
                                <th>Date Paid</th>


                                <th><button onClick={handleOpen} className={styles.buttonGroups} style={{color:"white"}}><AiFillPlusCircle/></button></th>
							</tr>
						<tr>
							<td>39949</td>
                            <td>Employee</td>
							<td>Employee</td>
                            <td>300.00</td>
							<td>250.00</td>
                            <td>26-03-2021</td>
                            <td>29-03-2021</td>
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

export default EmployeeSalary
