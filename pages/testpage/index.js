import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styles from '../../styles/Dashboard/Modals/modal.module.css'


import {FaUserPlus} from 'react-icons/fa';


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

export default function TransitionsModal() {
    //State objects
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("")
    const [department, setDepartment] = React.useState("");
    const [unit, setUnit] = React.useState("");

    //material ui modal objects
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
                <FaUserPlus/>
                <form id="add-emp-form">
                <div className="m-4">
                    <div>
                    <input
                        className={styles.InputField}
                        placeholder="Enter employee firstname"
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
                        id="emp-age"
                        value={styles.lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    ></input>
                    </div>
                </div>
                <div className="m-4">
                    <label className={styles.label}>Department</label>
                    <div>
                    <input
                        className={styles.InputField}
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
                        id="emp-unit"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                    ></input>
                    </div>
                </div>
                <div className="m-4">
                    <button
                        className={`${styles.btn} text-light `}
                        id="dismiss-mod-btn"
                        type="button"
                        data-dismiss="modal"
                        >
                        Close
                    </button>
                    <button
                        className={`${styles.btn} text-light `}
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
  );
}
