import React, { useEffect } from 'react'
import './Admin_layout.css'
import Reports_Sidebar from '../components/Admin/Reports/Reports_Sidebar/Reports_Sidebar'
import Reports_Content from '../components/Admin/Reports/Reports_Content/Reports_Content'


const Admin_Reports = () => {
    useEffect(() => {
        document.title = "MedConnect | Admin - Reports";
    }, []);

  return (
    <div className='admin-body'>
      <div className='admin-display'>
        <Reports_Sidebar />
        <div className='admin-main-content'>
            <Reports_Content />
        </div>
      </div>
    </div>
  )
}

export default Admin_Reports
