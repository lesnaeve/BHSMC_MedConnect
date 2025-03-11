import React from 'react'
import { IoMdNotifications } from 'react-icons/io';
import './Dashboard_Profile.css'
import Admin_ProfileHeader from './Dashboard_ProfileHeader'
import admin_placeholder_pfp from '../../../../../img/profile/placeholder_admin.jpg'

const Dashboard_Profile = () => {
  return (
    <div className='admin-profile'>
        <Admin_ProfileHeader />
        <div className='user-profile'>
            <div className='user-details'>
                <img src={admin_placeholder_pfp} />
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
            <li className='notificationItem'>Jak Roberto unsint a message</li>
            <li className='notificationItem'>Nasaan si Fyang?</li>
            <li className='notificationItem'>Fyang Smith left the house</li>
            <li className='notificationItem'>Lagay mo to</li>
          </div>
        </div>
    </div>
  )
}

export default Dashboard_Profile
