import React, { useEffect } from 'react'
import './Admin_layout.css'
import FAQsManagement_Sidebar from '../components/Admin/FAQsManagement/FAQsManagement_Sidebar/FAQsManagement_Sidebar'
import FAQsManagement_Content from '../components/Admin/FAQsManagement/FAQsManagement_Content/FAQsManagement_Content'

const Admin_FAQsManagement = () => {
    useEffect(() => {
        document.title = "MedConnect | Admin - FAQs Management";
    }, []);

  return (
    <div className='admin-body'>
        <div className='admin-display'>
            <FAQsManagement_Sidebar />
            <div className='admin-main-content'>
                <FAQsManagement_Content />
            </div>
        </div>
      
    </div>
  )
}

export default Admin_FAQsManagement
