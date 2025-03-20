import React from 'react'
import '../UserManagement_Content.css'


const UserManagement_UserList = () => {
  return (
    <div className='user_management-list'>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Department Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>102</td>
                        <td>Marketing</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default UserManagement_UserList
