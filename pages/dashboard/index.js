import React from 'react'
import Head from 'next/head'
import UserDashboard from '../../components/Dashboard/Dashboard';

const UserDashboardPage = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="https://img.icons8.com/material-two-tone/50/000000/background-remover.png"/>
            </Head>
            <UserDashboard/>
        </div>
    )
}

export default UserDashboardPage
