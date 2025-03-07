import React, {useEffect} from 'react'
import './Admin_layout.css'
import ManageTickets_Sidebar from '../components/Admin/ManageTickets/ManageTickets_Sidebar/ManageTickets_Sidebar'
import ManageTickets_Content from '../components/Admin/ManageTickets/ManageTickets_Content/ManageTickets_Content'

const Admin_ManageTickets = () => {
    useEffect(() => {
        document.title = "MedConnect | Admin - Manage Tickets";
    }, []);

  return (
    <div className='admin-body'>
      <div className='admin-display'>
        <ManageTickets_Sidebar />
        <div className='admin-main-content'>
            <ManageTickets_Content />
        </div>
      </div>
    </div>
  )
}

export default Admin_ManageTickets
