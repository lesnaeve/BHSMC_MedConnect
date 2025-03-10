import React from 'react'
import './Dashboard_UserActivity.css'
import { FaRegEye } from "react-icons/fa";

const Dashboard_UserActivity = () => {
  return (
    <div>
      <div className='user-activity_list'>
        <h2>User Activity</h2>
        <div className='user-activity-action'>

        </div>
      </div>

      <div className='user-activity-table'>
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>You added a new user</td>
              <td>March 10, 2025</td>
              <td>9:26:41 AM</td>
              <td><FaRegEye size={20} /></td>
            </tr>
            <tr>
              <td>You changed your password</td>
              <td>March 07, 2025</td>
              <td>7:09:56 PM</td>
              <td><FaRegEye size={20}/></td>
            </tr>
            <tr>
              <td>You uploaded a new announcement</td>
              <td>March 03, 2025</td>
              <td>1:44:12 PM</td>
              <td><FaRegEye size={20} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='pagination-container'>
        <div>
          <button className='btn-box-pagination'>Previous</button>
          <span>Page  of </span>
          <button className='btn-box-pagination'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_UserActivity
