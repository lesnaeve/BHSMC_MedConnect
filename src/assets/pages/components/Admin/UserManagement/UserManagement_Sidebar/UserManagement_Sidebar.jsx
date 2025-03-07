import React from 'react'
import '../../../../Admin/Admin_Sidebar.css'
import { FaHome } from "react-icons/fa";
import { LuTickets } from "react-icons/lu";
import { GrUserManager } from "react-icons/gr";
import { TbPresentationAnalytics } from "react-icons/tb";
import { MdSpeakerNotes } from "react-icons/md";
import { FaFileCircleQuestion } from "react-icons/fa6";
import menu_logo from '../../../../../img/Sidebar/logo.png'


const UserManagement_Sidebar = () => {
    return (
        <div className='menu'>
            <div className='menu-logo'>
                <img src={menu_logo} alt='' />
                <h2>
                    <span className='color1'>Med</span><span className='color2'>Connect</span>
                </h2>
            </div>
            <div className='menu-list'>
                <a href='/admin/dashboard' className='item'><FaHome />Dashboard</a>
                <a href='/admin/manage_tickets' className='item'><LuTickets />Manage Tickets</a>
                <a href='/admin/user_management' className='item active'>< GrUserManager />User Management</a>
                <a href='/admin/reports' className='item'><TbPresentationAnalytics />Reports</a>
                <a href='/admin/announcements' className='item'><MdSpeakerNotes />Announcements</a>
                <a href='/admin/faqs_management' className='item'><FaFileCircleQuestion />FAQs Management</a>
            </div>

        </div>
    )
}

export default UserManagement_Sidebar
