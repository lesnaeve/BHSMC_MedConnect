import React from 'react'
import { BiSearch } from "react-icons/bi";
import '../UserManagement_Content.css'
import UserManagement_Add from './UserManagement_Add';

const UserManagement_ContentHeader = () => {
  return (
    <div className='user_management-header'>
      <h1 className='user_management-title'>User Management</h1>
      <div className='user_management-activity'>
        <div className='manage-tickets-search'>
          <input type='text' placeholder='Search...' />
          <BiSearch className='search-icon' />
        </div>
        <div className='buttons-header'>
          <UserManagement_Add />
        </div>
      </div>
    </div>
  )
}

export default UserManagement_ContentHeader
