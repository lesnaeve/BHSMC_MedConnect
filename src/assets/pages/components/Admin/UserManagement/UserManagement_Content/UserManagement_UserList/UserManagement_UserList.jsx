import React from 'react'
import '../UserManagement_Content.css'
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
                        <td><FaUserEdit className='table-ico' /><MdDelete className='table-ico'></MdDelete></td>
                    </tr>
                    <tr>
                        <td>137</td>
                        <td>Information Technology</td>
                        <td><FaUserEdit className='table-ico' /><MdDelete className='table-ico'></MdDelete></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className='pagination-user_management'>
            <div>
                <button className='btn-box-pagination-user_management'>Previous</button>
                <span>Page  of  </span>
                <button className='btn-box-pagination-user_management'>Next</button>
            </div>
        </div>
      
    </div>
  )
}

export default UserManagement_UserList
