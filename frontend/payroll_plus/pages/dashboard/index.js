import React from 'react'
import Head from 'next/head'
import UserDashboard from '../../components/Dashboard/Dashboard';

const UserDashboardPage = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <UserDashboard/>
        </div>
    )
}

export default UserDashboardPage
