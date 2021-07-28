import Modal from "../../../Layout/Modal";
import styles from "../../../styles/Dashboard/Modals/bootstrapmodal.module.css";
import { useState, useEffect } from "react";


export default function AddEmployees() {
  const { label, input, btn, fileLabel,fileinput, btn2 } = styles


  const addEmployee = async () => {
    
  };

  return (
      <div>
    <Modal id="add-employees" title="Add New Employee">
      <div>
        <form id="admin-clt client-organization-form" onSubmit={addEmployee}>
          <div className="m-4">
            <label className={label}>Employee Name</label>
            <div>
              <input
                className={input}
                id="employee-name"
              ></input>
            </div>
          </div>
          <div className="m-4">
            <label className={label}>Employee Age</label>
            <div>
              <input
                className={input}
                id="employee-age"
                value={description}
              ></input>
            </div>
          </div>
          <div className="m-4">
            <button
                className={`${btn} text-light `}
                id="add-employee-btn"
                type="button"
                data-dismiss="modal"
                >
                Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
    </div>
  );
}
