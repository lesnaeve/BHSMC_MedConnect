import React from 'react'
import './Dashboard_Profile.css'
import { BiEditAlt } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";

const Dashboard_ProfileHeader = () => {
  return (
    <div className='admin-profile-header'>
        <h2 className='profile-title'>Profile</h2>
        <div className='buttons-header'>
            <div className='profile-act'>
                <BiEditAlt className='profile-icon' />
            </div>
            <div className='profile-act'>
                <LuLogOut className='profile-icon' />
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard_ProfileHeader
