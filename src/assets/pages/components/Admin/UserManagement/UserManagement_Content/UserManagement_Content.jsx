import React from 'react'
import './UserManagement_Content.css'
import UserManagement_ContentHeader from './UserManagement_ContentHeader/UserManagement_ContentHeader'
import UserManagement_UserList from './UserManagement_UserList/UserManagement_UserList'

const UserManagement_Content = () => {
  return (
    <div className='user_management-content'>
        <UserManagement_ContentHeader />
        <UserManagement_UserList />
    </div>
  )
}

export default UserManagement_Content
