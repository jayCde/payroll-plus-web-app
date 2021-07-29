import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {FaApplePay, FaUserCircle, FaAlipay, FaAmazonPay, FaCcPaypal} from 'react-icons/fa'
import {FiSettings, FiLogIn} from 'react-icons/fi'
import {GiCash} from 'react-icons/gi'
import {MdPayment} from 'react-icons/md'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Payroll - Plus | Home</title>
        <link rel="icon" href="https://img.icons8.com/material-two-tone/50/000000/background-remover.png"/>
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>
          Welcome to the <a> Payroll Plus!</a>
        </h4>

        <p className={styles.description}>
          Get started by Choosing an option below...
        </p>

        <div className={styles.grid}>
          <a href="/dashboard" className={styles.card}>
            <h3>Payroll <FaApplePay/> <FaAlipay/> <FaAmazonPay/> <FaCcPaypal/> <MdPayment/></h3>
            <p>Employee payroll, More...</p>
          </a>

          <a href="/dashboard" className={styles.card}>
            <h3>Users <FaUserCircle/></h3>
            <p>User management, More...</p>
          </a>

          <a
            href="/dashboard"
            className={styles.card}
          >
            <h3>Payments <GiCash/></h3>
            <p>Employee payments, History...</p>
          </a>

          <a
            href="/auth/login"
            className={styles.card}
          >
            <h3>Login Here <FiLogIn/></h3>
            <p>
              Login for access to the Admin Management Console, More...
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
