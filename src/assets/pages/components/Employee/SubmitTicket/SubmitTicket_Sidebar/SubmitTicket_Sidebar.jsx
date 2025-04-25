import React from 'react'
import '../../../../Employee/Employee_Sidebar.css'
import { FaHome } from "react-icons/fa";
import { LuTickets } from "react-icons/lu";
import menu_logo from '../../../../../img/Sidebar/logo.png'

const SubmitTicket_Sidebar = () => {
  return (
    <div className='employee-menu'>
      <div className='employee-menu-logo'>
        <img src={menu_logo} alt='' />
        <h2>
            <span className='color1'>Med</span><span className='color2'>Connect</span>
        </h2>
      </div>
      <div className='employee-menu-list'>
            <a href='/employee/dashboard' className='item'><FaHome />Dashboard</a>
            <a href='/employee/submit_ticket' className='item active'><LuTickets />Submit Ticket</a>
            <a href='/employee/my_tickets' className='item'><LuTickets />My Tickets</a>
      </div>
    </div>
  )
}

export default SubmitTicket_Sidebar
