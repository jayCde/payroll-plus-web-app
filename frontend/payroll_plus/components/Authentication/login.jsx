import React from 'react';
import Head from 'next/head';
import { useForm } from "react-hook-form";
import {FaUserCircle} from 'react-icons/fa';
import {AiFillPlusCircle} from 'react-icons/ai';
import styles from '../../styles/auth.module.css';

const UserLogin = () => {
    //Using react hook - form to handle form events
    const { register, 
        handleSubmit = async (e) => {
        {e.preventDefault;}
        },
     watch, formState: { errors } } = useForm();

    //watch errors in form fields
    console.log(watch('userName', 'password'));
    console.log(errors.email, errors.password);

    //function to submit login form data
    const OnSubmituser = (data = { userName, password }) => {

    //Endpoint -- url for making signup calls
    const loginurl = "http://localhost:8000/api/login";
  
      console.log("data is", data);
      axios
        .post(loginur,{
            email: data.userName,
            password: data.password,
        }).then(resp => {
          //If user credentials are correct and login successful
          if (resp.status == 200) { 
                window.localStorage.setItem("user-credentials", JSON.stringify(resp.data));
                window.location.href = "dashboard";
                alert("login successful");
            }
          }).catch(err => {
              window.location.href="#"
          console.log("An error occurred while logging in", err);
          alert("Kindly enter valid credentials");
        });
      console.log(data);
    };

    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <title>Payroll - Plus | Login</title>
                    <link rel="icon" href="https://img.icons8.com/material-two-tone/50/000000/background-remover.png"/>
                </Head>
                <main className={styles.main}>
                    <div className={styles.title}>Payroll - Plus<span><AiFillPlusCircle/></span></div>

                    <div className={styles.card}>
                        <FaUserCircle style={{ fontSize: "30px", marginBottom: "10px"}} />
                        <h3>USER LOGIN</h3>
                        
                        <form onSubmit={handleSubmit(OnSubmituser)}>
                            <input
                                type="text"
                                className={styles.InputField}
                                placeholder="Enter a valid email or username"
                                name="userName"
                                id="username"
                                {...register("userName",
                                    {
                                        required: true,
                                        minLength: 7
                                })}
                            ></input>
                            {errors.userName && (
                            <   span className={styles.errors}>
                                    Kindly enter a valid username
                                </span>
                            )}{" "}
                            
                            <input
                                type="password"
                                className={styles.InputField}
                                placeholder="Enter a valid password"
                                name="password"
                                id="password"
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 8
                                })}
                            >
                            </input>
                            {errors.password && (
                                <span className={styles.errors}>
                                    Kindly enter a valid password with a min. length of 8
                                </span>
                            )}{" "}

                            <br />
                            <center>
                                <button type="submit" value="submit" className={styles.loginbtn}>
                                    Login
                                </button>
                            </center>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserLogin
