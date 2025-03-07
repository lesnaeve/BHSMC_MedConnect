import React from 'react'
import './Dashboard_Content.css'
import Dashboard_ContentHeader from './Dashboard_ContentHeader/Dashboard_ContentHeader'
import Dashboard_Card from './Dashboard_Card'
import Dashboard_UserActivity from './Dashboard_UserActivity/Dashboard_UserActivity'


const Dashboard_Content = () => {
  return (
    <div className='dashboard-content'>
      <Dashboard_ContentHeader />
      <Dashboard_Card />
      <Dashboard_UserActivity />
    </div>
  )
}

export default Dashboard_Content
