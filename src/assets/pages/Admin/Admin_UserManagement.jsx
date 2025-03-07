import React, { useEffect } from 'react'
import './Admin_layout.css'
import UserManagement_Sidebar from '../components/Admin/UserManagement/UserManagement_Sidebar/UserManagement_Sidebar'
import UserManagement_Content from '../components/Admin/UserManagement/UserManagement_Content/UserManagement_Content'


const Admin_UserManagement = () => {
    useEffect(() => {
        document.title = "MedConnect | Admin - User Management";
    }, []);
        
  return (
    <div className='admin-body'>
        <div className='admin-display'>
            <UserManagement_Sidebar />
            <div className='admin-main-content'>
                <UserManagement_Content />
            </div>
        </div>
    </div>
  )
}

export default Admin_UserManagement
