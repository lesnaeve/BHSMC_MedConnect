import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import '../ManageTickets_Content.css';

const ManageTickets_TicketList = () => {
  return (
    <div className='manage-tickets-list'>
      <div>
        <table>
            <thead>
                <tr>
                    <th>Urgency</th>
                    <th>Ticket Description</th>
                    <th>Ticket Type</th>
                    <th>Sender</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Urgent</td>
                    <td>Wala pong Internet</td>
                    <td>Internet Issues</td>
                    <td>OR Dept</td>
                    <td>03/11/2025</td>
                    <td>12:21:08 PM</td>
                    <td><FaCheck className='table-ico'/> <IoMdRemoveCircleOutline className='table-ico'/></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageTickets_TicketList
