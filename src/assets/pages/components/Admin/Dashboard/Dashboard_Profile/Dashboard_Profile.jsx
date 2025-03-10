import React from 'react'
import { IoMdNotifications } from 'react-icons/io';
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
          <div className='notificationHeader'>
            <IoMdNotifications className='notificationIcon' />
            <h4 className='notificationTitle'>Notifications</h4>
          </div>
          <div className='notificationList'>
            <li className='notificationItem'>Ok na to</li>
            <li className='notificationItem'>Ok na to</li>
            <li className='notificationItem'>Ok na to</li>
          </div>
        </div>
    </div>
  )
}

export default Dashboard_Profile
