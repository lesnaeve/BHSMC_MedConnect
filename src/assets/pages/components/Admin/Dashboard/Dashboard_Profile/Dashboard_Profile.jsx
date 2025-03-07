import React from 'react'
import './Dashboard_Profile.css'
import Admin_ProfileHeader from './Dashboard_ProfileHeader'

const Dashboard_Profile = () => {
  return (
    <div className='admin-profile'>
        <Admin_ProfileHeader />
        <div className='user-profile'>
            <div className='user-details'>
                
                <h3 className='admin-fullname'>Juan Dela Cruz</h3>
                <span>Admin</span>
            </div>
        </div>
        <div className='notifications'>

        </div>
    </div>
  )
}

export default Dashboard_Profile
