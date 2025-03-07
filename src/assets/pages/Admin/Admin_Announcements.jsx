import React, { useEffect } from 'react'
import './Admin_layout.css'
import Announcements_Sidebar from '../components/Admin/Announcements/Announcemnts_Sidebar/Announcements_Sidebar'
import Announcements_Content from '../components/Admin/Announcements/Announcements_Content/Announcements_Content'


const Admin_Announcements = () => {
    useEffect(() => {
        document.title = "MedConnect | Admin - Announcements";
    }, []);

  return (
    <div className='admin-body'>
        <div className='admin-display'>
            <Announcements_Sidebar />
            <div className='admin-main-content'>
                <Announcements_Content />
            </div>
        </div>
      
    </div>
  )
}

export default Admin_Announcements
